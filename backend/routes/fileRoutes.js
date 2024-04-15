const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.post("/files", fileController.createFile);
router.get("/files/getFiles", fileController.getFiles);
router.get("/files/getFilesByEmail/:email", fileController.getFilesByEmail);
router.get("/files/getSingleFile/:id", fileController.getFile);
router.post("/files/updateFile/:id", fileController.updateFile);
router.delete("/files/deleteFile/:id", fileController.deleteFile);

module.exports = router;
