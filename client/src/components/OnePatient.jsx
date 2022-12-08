import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function OnePatient(props) {
 
  
    return <div>
      <li>{props.patient.name}</li>
  </div>;
}

export default OnePatient;
