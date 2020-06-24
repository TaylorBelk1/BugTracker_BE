const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const dbHelper = require("../../database/helpers/adminUsersHelper");


// expects { "username": "", "password": "", "first_name": "", "last_name": "", "email": "" }

const errors = {
    userExists: "The username provided already exists",
    emailExists: "The email address provided already exists"
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
            res.status(201).json(newUser)
        }).catch(err => {
            res.status(500).json(err);
        })
    }
})

module.exports = router;