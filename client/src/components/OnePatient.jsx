import axios from "axios";
import React from "react";
import { useEffect ,useState } from "react";

function OnePatient(props) {
 
    return (
      <tr onClick={() => {
        props.setView("one")
     props.setOnePatient(props.patient);}}>
          <th scope="row">{props.patient.IDcard}</th>
          <td >{props.patient.name}</td>
          <td >{props.patient.age}</td>
          <td >{props.patient.nextRDV_2}</td>
        </tr>
    );
}

export default OnePatient;
