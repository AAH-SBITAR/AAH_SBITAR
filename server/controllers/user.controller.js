exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.doctorBoard = (req, res) => {
    res.status(200).send("Doctor Content.");
  };
  
  exports.receptionistBoard = (req, res) => {
    res.status(200).send("receptionist Content.");
    
  };
  