const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// const {
//   validateToken,
//   requireRoles,
// } = require("../utils/authorizationMiddleware");

router.post("/users", userController.createUser);
router.post("/login", userController.login);
router.get("/users/getUsers", userController.getUsers);
router.get("/users/getSingleUser/:id", userController.getSingleUser);
router.put("/users/updateUser/:id", userController.updateUser);
router.delete("/users/deleteUser/:id", userController.deleteUser);
router.post("/admin", userController.adminDasboard);


module.exports = router;
