const express = require("express");
const router = express.Router();

const notesHelper = require("../../database/helpers/ticketNotesHelper");

const errors = {
    cantGetNotes: "Unable to retrieve the notes for this ticket",
    noTicketsForNote: "There are no notes for this ticket",
    cantCreateNote: "Unable to create the note",
    cantUpdate: "Unable to update the note",
    cantDelete: "Unable to delete the note"
}

router.post("/getNotesForTicket", async(req, res) => {
    let ticket_id = req.body.ticket_id;

    notesHelper.getNotesForTicketId(ticket_id).then(notes => {
        if (notes.length === 0) res.status(400).json({message: errors.noTicketsForNote});
        else res.status(200).json(notes)
    }).catch(err => {
        res.status(500).json({err, message: errors.cantGetNotes})
    })
});

router.post("/addNewNote", async(req, res) => {
    let note = req.body;

    notesHelper.createNewNote(note).then(n => {
        console.log(n);
        if(!n) res.status(400).json({ message: errors.cantCreateNote })
        else res.status(200).json(n)
    }).catch(err => {
        res.status(500).json({ err, message: errors.cantCreateNote })
    })
});

router.put("/updateNote", async(req, res) => {
    let note = req.body;

    notesHelper.updateNote(note).then(n => {
        console.log(n);

        if(!n) res.status(400).json({ message: errors.cantUpdate })
        else res.status(200).json(n)
    }).catch(err => {
        res.status(500).json({ err, message: errors.cantCreateNote })
    })
});

router.delete("/deleteNote", async(req, res) => {
    let id = req.body;

    notesHelper.deleteNote(id).then(i => {
        console.log(i);

        if(!i) res.status(400).json({ message: errors.cantDelete })
        else res.status(200).json(i)
    }).catch(err => {
        res.status(500).json({ err, message: errors.cantCreateNote })
    })
})

module.exports = router;