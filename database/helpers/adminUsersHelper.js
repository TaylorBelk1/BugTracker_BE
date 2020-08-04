const db = require("../dbConfig.js");

module.exports = {
    getAllAdmin,
    getAdminById,
    getAdminByUsername,
    getAdminByEmail,
    addAdmin,
    updateAdmin,
    deleteAdmin,
}

async function getAllAdmin() {
    return await db("admin_users");
}

async function getAdminById(id) {
    return await db("admin_users").where({ id }).first();
}

async function getAdminByUsername(username) {
    return await db("admin_users").where({ username }).first();
}

async function getAdminByEmail(email) {
    return await db("admin_users").where({ email }).first();
}

// takes an admin object
async function addAdmin(admin) {
    return await db("admin_users")
        .insert(admin, "id")
        .then(newId => {
            return getAdminById(newId[0]);
        });
}

// takes admin's id and the updated admin object
async function updateAdmin(id, admin) {
    return await db("admin_users")
        .where({ id })
        .update(admin, "id")
        .then(userId => {
            return getAdminById(userId)
        });
}

async function deleteAdmin(id) {
    return await db("admin_users").where({ id }).del();
}


