import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import OnePatient from './OnePatient';

function PatientList({ setView, setOnePatient  }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll();
    console.log(data);
  },[]);

  let getAll = () => {
    axios.get("http://localhost:3000/patient/getAll").then((req) => {
      // filter the data to show only patients who have appointement today
      let arr = req.data.filter((e) => {
let currentTime = new Date().toISOString().split("T")[0];
        return e.nextRDV_2 === currentTime;
      });

      setData(arr);
      console.log(req.data);
    });
  };
    return (
      <div >
        <table class="table">
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

export default PatientList