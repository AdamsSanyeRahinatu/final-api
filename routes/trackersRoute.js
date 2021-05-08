const express = require("express");
const {
  createTracker,
  getAllTrackers,
  getSingleTracker,
  updateTracker,
  deleteTracker,
} = require("../controllers/trackersController");

const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post( createTracker).get(getAllTrackers);
router
  .route("/:_id")
  .get(getSingleTracker)
  .put(updateTracker)
  .delete(deleteTracker);

module.exports = router;