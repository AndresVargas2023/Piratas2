const express = require("express");
const router = express.Router();

const userController = require('../controllers/user.controller');
const { authenticate } = require("../config/jwt.config");

router.post("", userController.createUser);
router.post("/session", userController.login);
router.delete("/session", userController.logout);

router.get("", userController.getUsers);



module.exports = router;