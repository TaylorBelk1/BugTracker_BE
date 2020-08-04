const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

const { authToken } = require('../../jwtGen');

const ticketHelper = require("../../database/helpers/ticketHelper");
const notesHelper = require("../../database/helpers/ticketNotesHelper");

const errors = {
    
}

router.post("/getUserTickets", async(req, res) => {
    console.log('in get user tickets')
    return res.status(200).json(req.body.username)
})

module.exports = router;