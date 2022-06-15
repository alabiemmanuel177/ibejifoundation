const router = require("express").Router();
const contact = require("../models/Contact");

//CREATE CONTACT
router.post("/", async (req, res) => {
  const newContact = new contact(req.body);
  try {
    const savedContact = await newContact.save();
    res.status(200).json(savedContact);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE CONTACT
router.delete("/:id", async (req, res) => {
  try {
    const contact = await contact.findById(req.params.id);
    await contact.delete();
    res.status(200).json("contact has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CONTACT
router.get("/:id", async (req, res) => {
  try {
    const contact = await contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CONTACT
router.get("/", async (req, res) => {
  try {
    let contacts;
    contacts = await contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
