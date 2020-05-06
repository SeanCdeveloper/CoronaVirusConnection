const express = require('express');
const router = express.Router();
const axios = require("axios");
const passport = require("./passport");
require('dotenv').config();


router.get("/", (req, res) => {
    res.send("Server is up and running");
})
router.get("/news", (req, res) => {
    axios.get("http://newsapi.org/v2/everything?q=coronavirus&apiKey=" + process.env.API_KEY)
        .then(data => {
            res.send(data.data.articles);
        })
        .catch(err => console.log(err));

})

module.exports = router;

