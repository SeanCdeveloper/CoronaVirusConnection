const router = require("express").Router();
const messageRoutes = require("./messages");

// Book routes
router.use("/messages", messageRoutes);

module.exports = router;

