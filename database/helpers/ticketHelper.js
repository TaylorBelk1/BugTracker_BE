const db = require("../dbConfig.js");
const notesHelper = require("./ticketNotesHelper");

module.exports = {
    getTicketsAssignedToUser
}

// async function getTicketsAssignedToUser(username) {
//     let tickets = await db("tickets").where("assigned_to", username);
//     let ticketsAndNotes = tickets.map(async t => {
//         t.notes = await notesHelper.getNotesForTicketId(t.id);
//     })
//     return ticketsAndNotes
// }

async function getTicketsAssignedToUser(username) {
    return await db("tickets").where("assigned_to", username)
}