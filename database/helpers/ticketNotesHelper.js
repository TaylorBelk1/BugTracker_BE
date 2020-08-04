const db = require("../dbConfig.js");

module.exports = {
    getNotesForTicketId
}

async function getNotesForTicketId(id) {
    let notes = await db("ticket_notes").where("ticket_id", id);
    // console.log(notes)
    return notes
}