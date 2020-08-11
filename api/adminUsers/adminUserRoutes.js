const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("../../jwtGen");
const dbHelper = require("../../database/helpers/adminUsersHelper");
const ticketHelper = require("../../database/helpers/ticketHelper");
const notesHelper = require("../../database/helpers/ticketNotesHelper");


// expects { "username": "", "password": "", "first_name": "", "last_name": "", "email": "" }

const errors = {
    userExists: "The username provided already exists",
    emailExists: "The email address provided already exists",
    cantAdd: "Unable to create the admin",
    missingUserOrPass: "Username or password is missing",
    dontMatch: "Username doesn't exist or the password entered was wrong",
    cantMakeToken: "Cannot create token"
}

router.post("/create-admin", async(req, res) => {
    // check if user exists in db by username and email
    let user = req.body;
    let email = await dbHelper.getAdminByEmail(user.email);
    let username = await dbHelper.getAdminByUsername(user.username);
    // check if email exists
    if(email) res.status(422).json({ message: errors.emailExists})
    // check if user name exists
    else if(username) res.status(422).json({ message: errors.userExists })
    // if the username or email does not exist in our db....
    else {
        // hash the users password and add the user to the DB
        const hashedPass = bcrypt.hashSync(user.password, 10);
        user.password = hashedPass;

        dbHelper.addAdmin(user).then(newUser => {
            const token = jwt.generateToken(newUser)
            console.log(token)
            res.status(201).json({
                newUser,
                token
            })
        }).catch(err => {
            res.status(500).json({err, message: errors.cantAdd});
        })
    }
})

router.post("/admin-login", async(req, res) => {
    // pull user name and password from request body
    let {username, password} = req.body;
    console.log(username, password)
    // grab user from database by the user name
    dbHelper.getAdminByUsername(username).then(async user => {
        // Check that pw matches
        if(bcrypt.compareSync(password, user.password)) {
            // grab the user's tickets and create a token
            console.log("password matches")
            let tickets = await ticketHelper.getTicketsAssignedToUser(username);
            const token = jwt.generateToken(user)
            console.log(user, tickets)
            res.status(200).json({
                user,
                tickets,
                token
            })
        } else {
            res.status(500).json({err, message: errors.dontMatch});
        }
    }).catch(err => {
        res.status(500).json({err, message: errors.dontMatch});
    })
})


module.exports = router;