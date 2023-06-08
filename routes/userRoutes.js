const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers");

router.post(`/createUser`, UserController.createUser);

router.get(`/fetchUsers`, UserController.FETCH_USERS);
module.exports = router;
