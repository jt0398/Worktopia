const router = require("express").Router();
const loginRoutes = require("./login.js");


// Log In routes
router.use("/login", loginRoutes);


module.exports = router;
