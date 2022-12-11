import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import OnePatient from "./OnePatient";

function PatientList({ setView, setOnePatient }) {
  const [data, setData] = useState([]);
  const [currentTime, setCurrentTime] = useState(
    new Date().toISOString().split("T")[0]
  );
  useEffect(() => {
    getAll();
    console.log(data);
    let newCurrentTime = new Date().toISOString().split("T")[0];
    setCurrentTime(newCurrentTime);
  }, []);

  let getAll = () => {
    axios.get("http://localhost:3000/patient/getAll").then((req) => {
      // filter the data to show only patients who have appointement today
      let arr = req.data.filter((e) => {
        return e.nextRDV_2 === currentTime;
      });

      setData(arr);
      console.log(req.data);
    });
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID card</th>
            <th scope="col">name</th>
            <th scope="col">age</th>
            <th scope="col">Appointement</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <OnePatient
                patient={e}
                key={i}
                setView={setView}
                setOnePatient={setOnePatient}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
