const express = require("express");
const router = express.Router();

const ticketHelper = require("../../database/helpers/ticketHelper");


const errors = {
    cantGetTickets: "Unable to retrieve user's assigned tickets",
    cantCreate: "Unable to create ticket"
}

router.post("/getUserTickets", async(req, res) => {
    console.log('in get user tickets')
    let { username } = req.body;

    ticketHelper.getTicketsAssignedToUser(username).then(ticket => {
        res.status(200).json({
            ticket
        });
    }).catch(err => {
        res.status(500).json({err, message: errors.cantGetTickets})
    })
})

router.post("/createNewTicket", async(req, res) => {
    console.log("in create new ticket");
    let ticket = req.body;
    console.log(req.body)
    ticketHelper.createNewTicket(ticket).then(id => {
        if(id.length > 0) res.status(200).json({ id })
        else res.status(400).json({ message: errors.cantCreate })
    }).catch(err => {
        res.status(500).json({ err, message: errors.cantCreate })
    })
})

module.exports = router;