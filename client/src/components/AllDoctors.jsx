import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./doctors.css";
function AllDoctors() {
    const [data, setData] = useState([])
    let [role, setRole] = useState("")
    useEffect(() => {
        axios.get("http://localhost:3000/getAll").then(
            (req) => {
                let x = req.data.filter((filt)=>{return (filt.speciality)})
                setData(x)
                console.log(req.data);
            }
        );

    }, [])


    return (
       <div>
        <h2>Doctors</h2>
        <div class=" holder container mt-5 mb-5" >
            <div class="d-flex justify-content-between mb-3 ">

            </div>
            {data.map((e) => {

                return (
                    <div className='card1' >
                        <div class="row g-2">
                            <div class="col-md-3 ">
                                <div class=" p-2 py-3 text-center ">
                                    <div class="img mb-2">
                                        <img src={e.image}width="70" class="rounded-circle" />
                                    </div>
                                    <h5 class="mb-0">{e.username}</h5>
                                    <br/>
                                    <small >{e.speciality}</small>
                                    <div class="ratings mt-2">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    
                                    <div class="mt-4 apointment">
                                        <button class="btn btn-primary">
                                        <a href="mailto:abc@example.com?subject = Feedback&body = Message">
                                            Book Appointment
                                        </a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                )
            })}
        </div>
        </div> 
    )
}

export default AllDoctors