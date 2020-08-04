const dotenv = require("dotenv").config();
const cors = require('cors');
const express = require("express");
const server = express();

// server.use(cors(), express.json());
server.use(cors());
server.use(express.json());

const adminUserRoutes = require("./api/adminUsers/adminUserRoutes");

server.get("/", (req, res) => {
    res.status(200).json("Welcome")
})

server.use('/api', adminUserRoutes);

module.exports = server;