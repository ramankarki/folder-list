const express = require("express");
const {
  postFolder,
  getAllFolders,
  getFolder,
} = require("./../controller/folder");

const router = express.Router();

router.route("/").post(postFolder).get(getAllFolders);

// get single folder
router.route("/:id").get(getFolder);

module.exports = router;
