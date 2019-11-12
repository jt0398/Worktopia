const router = require("express").Router();
const userRoutes = require("./user");
const loginRoutes = require("./login");
const uploadRoutes = require("./upload");


// User routes
router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/upload", uploadRoutes);


module.exports = router;
