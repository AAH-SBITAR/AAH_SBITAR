

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import AuthService from "../services/auth.service";

  const user = AuthService.getCurrentUser();


function Update_Doctor({doctor , setUp}) {
    const [form, setForm] = useState({});
    const [data, setData] = useState({});


    const onchangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const submitHundler = (e) => {
        console.log(form);
        e.preventDefault()
        axios.put(`http://localhost:3000/updateDoctor/${doctor._id}`, form)
            .then(response => {
                alert(response.data.message)
                setUp()
                window.location.reload(false);


            })
            .catch(err => { console.log(err) })
    }


    return (
        <div className="container">
            <form onSubmit={submitHundler}>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" name="username" placeholder="Enter your Name" onChange={onchangeHandler} defaultValue={doctor.username} />
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="text" class="form-control" name="phone" placeholder="Enter your phone number" onChange={onchangeHandler} defaultValue={doctor.phone} />
                </div>
             { user && user.roles=="DOCTOR" &&  <div class="form-group">
                    <label for="speciality">Speciality:</label>
                    <input type="text" class="form-control" name="speciality" placeholder="Enter your  speciality " onChange={onchangeHandler} defaultValue={doctor.speciality} />
                </div>}
       
               
                <div class="form-group">
                    <label for="image">Image:</label>
                    <input type="text" class="form-control" name="image" placeholder="Enter your movie image url" onChange={onchangeHandler} defaultValue={doctor.image} />
                </div>
                

                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Update_Doctor