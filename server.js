const dotenv = require("dotenv").config();
const cors = require('cors');
const express = require("express");
const server = express();
const { authToken } = require('./jwtGen')

// server.use(cors(), express.json());
server.use(cors());
server.use(express.json());

const adminUserRoutes = require("./api/adminUsers/adminUserRoutes");
const ticketRoutes = require('./api/tickets/ticketRoutes');

server.get("/", (req, res) => {
    res.status(200).json("Welcome")
})

server.use('/admin', adminUserRoutes);
server.use('/api', authToken);
server.use('/api/tickets', ticketRoutes);

module.exports = server;