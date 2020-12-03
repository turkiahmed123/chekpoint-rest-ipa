const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
//test routing
router.get("/hello", (req, res) => {
  res.send("hello routing");
});

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact({ ...req.body });
    if (!req.body.name) {
      res.status(400).send("email is required check again");
      return;
    }
    const response = await newContact.save();
    res.send(response);
  } catch (error) {
    res.status(400).send("cannot save it");
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ response: result, messsage: "geeting contact seccessfully" });
  } catch (error) {
    res.status(400).send("can not get contact");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.send({ response: result, messsage: "geeting contact seccessfully" });
  } catch (error) {
    res.status(400).send("can not get contact with this id");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ response: "user deleted" })
      : res.send("there is no user with this id");
  } catch (error) {
    res.send("not deleted");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);

    result.nModified ? res.send("updated") : res.send("already updated");
  } catch (error) {
    res.status(400).send("there is no user with this id");
  }
});

module.exports = router;
