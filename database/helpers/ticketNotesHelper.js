const db = require("../dbConfig.js");

module.exports = {
    getNotesForTicketId,
    createNewNote,
    updateNote,
    deleteNote
}

async function getNotesForTicketId(ticket_id) {
    console.log(ticket_id)
    let notes = await db("ticket_notes").where('ticket_id', ticket_id);
    console.log(notes);
    return notes
}

async function createNewNote(note) {
    return await db("ticket_notes")
        .returning('id')
        .insert(note);
}

async function updateNote(note, id) {
    return await db("ticket_notes")
        .returning('id')
        .where({ id })
        .update(note);
}

async function deleteNote(id) {
    return await db("ticket_notes").where({ id }).delete();
}