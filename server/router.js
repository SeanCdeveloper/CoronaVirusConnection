const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    // res.send({response: "Server is up and running"}).status(200);
    res.send("Server is up and running");
})

module.exports = router;

