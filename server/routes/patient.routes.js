const controller = require("../controllers/patient.controller");

module.exports = function (app) {
  app.get("/patient/getAll",controller.getAllPatient);
  app.post("/patient/add", controller.addPatient);
  app.get("/patient/getOne/:IDcard", controller.getOnePatient);
  app.put("/patient/update/:IDcard", controller.updatePatient);
  app.delete("/patient/delete/:IDcard", controller.deletePatient);

};
