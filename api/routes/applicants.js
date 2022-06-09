const router = require("express").Router();
const Applicant = require("../models/Applicants")

//CREATE APPLICANT
router.post("/", async (req, res) => {
    const newApplicant = new Applicant(req.body);
    try {
      const savedApplicant = await newApplicant.save();
      res.status(200).json(savedApplicant);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//DELETE APPLICANT
router.delete("/:id", async (req, res) => {
    try {
      const applicant = await Applicant.findById(req.params.id);
      await applicant.delete();
      res.status(200).json("Applicant has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });


//GET APPLICANT
router.get("/:id", async (req, res) => {
    try {
      const applicant = await Applicant.findById(req.params.id);
      res.status(200).json(applicant);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL APPLICANT
router.get("/", async (req, res) => {
    try {
        let applicants;
        applicants = await Applicant.find()
      res.status(200).json(applicants);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router