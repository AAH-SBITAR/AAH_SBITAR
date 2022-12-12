const db = require("../models");

const Patient = db.patient;

exports.getAllPatient = async (req, res) => {
  try {
    let data = await Patient.find();
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
    console.log(error);
  }
};


exports.addPatient = async (req, res) => {
  try {
    await Patient.create(req.body);
    res.json({message:`${req.body.name} added successfuly` });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
    console.log(error);
  }
};

exports.getOnePatient = async (req, res) => {
  try {
    let data = await Patient.findOne({ IDcard: req.params.IDcard });
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
    console.log(error);
  }
}

exports.updatePatient = async (req, res) => {
  try {
    await Patient.findOneAndUpdate({ IDcard: req.params.IDcard }, req.body);
    res.status(201).json({ message: "Patient updated successfully" })
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
    console.log(error);
  }
}
          
          
  exports.deletePatient = async (req, res) => {
    try {
      let data = await Patient.deleteOne({ IDcard: req.params.IDcard });
      res.status(201).json({ message: "patient deleted successfully" })
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
      console.log(error);
    }
};
  