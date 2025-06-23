// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import "./doctors.css";
// function AllDoctors() {
//     const [data, setData] = useState([])
//     // let [role, setRole] = useState("")
//     useEffect(() => {
//         axios.get("http://localhost:3000/getAll").then(
//             (req) => {
//                 let x = req.data.filter((filt)=>{return (filt.speciality)})
//                 setData(x)
//                 console.log(req.data);
//             }
//         );

//     }, [])

//     return (
//        <div>
//         <h2>Doctors</h2>
//         <div class=" holder container mt-5 mb-5" >
//             <div class="d-flex justify-content-between mb-3 ">

//             </div>
//             {data.map((e) => {

//                 return (
//                     <div className='card1' >
//                         <div class="">
//                             <div class=" ">
//                                 <div class=" p-2 py-3 text-center ">
//                                     <div class="img mb-2">
//                                         <img src={e.image}width="120" height="120" class="rounded-circle" alt='doc img'/>
//                                     </div>
//                                     <h5 class="mb-0">{e.username}</h5>
//                                     <br/>
//                                     <small >{e.speciality}</small>
//                                     <div class="ratings mt-2">
//                                         <i class="fa fa-star"></i>
//                                         <i class="fa fa-star"></i>
//                                         <i class="fa fa-star"></i>
//                                         <i class="fa fa-star"></i>
//                                     </div>

//                                     <div class="mt-4 apointment">
//                                         <button class="btn btn-primary">
//                                         <a href="mailto:abc@example.com?subject = Feedback&body = Message">
//                                             Book Appointment
//                                         </a></button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         </div>

//                 )
//             })}
//         </div>
//         </div>
//     )
// }

// export default AllDoctors

import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./doctors.css";
import "./home.css";


function AllDoctors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/getAll").then((res) => {
      const filtered = res.data.filter((doc) => doc.speciality);
      setData(filtered);
    });
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5">Nos Médecins</h1>
        <p className="lead">Découvrez notre équipe médicale expérimentée</p>
      </div>

      <div className="row">
        {data.map((doctor, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-80 shadow-sm text-center p-3">
              <img
                src={doctor.image}
                alt="Doctor"
                className="rounded-circle mx-auto mb-3"
                width="170"
                height="170"
              />
              <h5 className="card-title">{doctor.username}</h5>
              <p className="text-muted">{doctor.speciality}</p>
              <div className="mb-3">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
              </div>
              <a
                href={`mailto:${
                  doctor.email || "info@aah.tn"
                }?subject=Rendez-vous`}
                className="btn btn-primary"
              >
                Prendre Rendez-vous
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllDoctors;
