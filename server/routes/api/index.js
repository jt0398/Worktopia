const router = require("express").Router();
const userRoutes = require("./user");
const loginRoutes = require("./login");
const uploadRoutes = require("./upload");
const workspaceRoutes = require("./workspace");
const locationRoutes = require("./location");
const bookingRoutes = require("./booking");

router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/upload", uploadRoutes);
router.use("/workspace", workspaceRoutes);
router.use("/location", locationRoutes);
router.use("/booking", bookingRoutes);

module.exports = router;
