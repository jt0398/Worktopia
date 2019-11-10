const router = require("express").Router();
const userRoutes = require("./user");
const loginRoutes = require("./login");


// User routes
router.use("/user", userRoutes);
router.use("/login", loginRoutes);


module.exports = router;
