import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import OnePatient from './OnePatient';

function PatientList() {
    const [data, setData] = useState([])
    useEffect(() => {
        getAll()
        console.log(data);
    }, [])


    let getAll = () => {
        axios.get("http://localhost:3000/patient/getAll").then(
            (req) => {
                setData(req.data)
                console.log(req.data);
        }
    );
}
  return (
      <ul>
          {data.map((e, i) => {
              return <OnePatient patient={e} key={i} />
          })}
    </ul>
  )
}

export default PatientList