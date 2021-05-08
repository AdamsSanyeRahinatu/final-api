const Tracker = require("../models/trackerSchema");

//adding a new Tracker
const createTracker = async (req, res) => {
  const newTracker = new Tracker({
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.location,
    password: req.body.services,
  });

  await newTracker.save();
  res.status(201).json(newTracker);
};
//get all Trackers
const getAllTrackers = async (req, res) => {
  const trackers = await Tracker.find();
  res.json(trackers);
};

//get all Tracker
const getSingleTracker = async (req, res) => {
  const tracker = await Tracker.findById(req.params._id);
  res.json(tracker);
};

//update a Tracker
const updateTracker = async (req, res) => {
  const foundTracker = await Tracker.findById(req.params._id);
  if (foundTracker) {
    (foundTracker.name = req.body.name),
      (foundTracker.gender = req.body.gender),
      (foundTracker.location = req.body.location),
      (foundTracker.services = req.body.services);

    const updatedTracker = await foundTracker.save();
    res.json({ updatedTracker: updatedTracker });
  }
};

//delete a Tracker
const deleteTracker = async (req, res) => {
  const foundTracker = await Tracker.findById(req.params._id);
  if (foundTracker) {
    foundTracker.remove();
    res.json({ msg: `${foundTracker.name} removed` });
  } else {
    res.status(404).json({ error: "Tracker not found" });
  }
};

module.exports = {
  createTracker,
  getAllTrackers,
  getSingleTracker,
  updateTracker,
  deleteTracker,
};
