const db = require("../dbConfig.js");
const notesHelper = require("./ticketNotesHelper");

module.exports = {
    getTicketsAssignedToUser,
    createNewTicket,
    updateTicket,
    deleteTicket
}

// expects { username: "" }
async function getTicketsAssignedToUser(username) {
    return await db("tickets").where("assigned_to", username)
}

// expects {
//  name: "",
// description: "",
// created_by: "",
// assigned_to: "" }
// timestamp will auto generate
async function createNewTicket(ticket) {
    return await db("tickets")
        .returning('id')
        .insert(ticket);
}

// expects {
//  name: "",
// description: "",
// created_by: "",
// assigned_to: "" }
// and ticket id
// timestamp will auto generate
async function updateTicket(ticket, id) {
    return await db("tickets")
        .returning('id')
        .where({ id })
        .update(ticket);
}

// expects { id: (int) }
async function deleteTicket(id) {
    return await db("tickets").where({ id }).delete();
}