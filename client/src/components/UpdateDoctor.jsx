

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import AuthService from "../services/auth.service";

  const user = AuthService.getCurrentUser();


function UpdateDoctor({doctor , setUp}) {
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

export default UpdateDoctor




// //chat gpt 

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import AuthService from "../services/auth.service";

// const user = AuthService.getCurrentUser();

// function UpdateDoctor({ doctor, setUp }) {
//     const [form, setForm] = useState({
//         username: doctor.username,
//         phone: doctor.phone,
//         speciality: doctor.speciality,
//         image: doctor.image
//     });
//     // const history = useHistory();
//     const [errors, setErrors] = useState({});

//     const onchangeHandler = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();

//         axios.put(`http://localhost:3000/updateDoctor/${doctor._id}`, form)
//             .then(response => {
//                 alert(response.data.message);
//                 setUp();
//                 // history.push('/profile'); // Redirect to profile page after successful update
//             })
//             .catch(err => {
//                 if (err.response && err.response.data) {
//                     setErrors(err.response.data.errors);
//                 } else {
//                     console.log(err);
//                 }
//             });
//     }

//     return (
//         <div className="container">
//             <form onSubmit={submitHandler}>
//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" className="form-control" name="username" placeholder="Enter your Name" onChange={onchangeHandler} value={form.username} />
//                     {errors.username && <span className="text-danger">{errors.username}</span>}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="phone">Phone:</label>
//                     <input type="text" className="form-control" name="phone" placeholder="Enter your phone number" onChange={onchangeHandler} value={form.phone} />
//                     {errors.phone && <span className="text-danger">{errors.phone}</span>}
//                 </div>
//                 {user && user.roles === "DOCTOR" && (
//                     <div className="form-group">
//                         <label htmlFor="speciality">Speciality:</label>
//                         <input type="text" className="form-control" name="speciality" placeholder="Enter your speciality" onChange={onchangeHandler} value={form.speciality} />
//                         {errors.speciality && <span className="text-danger">{errors.speciality}</span>}
//                     </div>
//                 )}
//                 <div className="form-group">
//                     <label htmlFor="image">Image:</label>
//                     <input type="text" className="form-control" name="image" placeholder="Enter your movie image url" onChange={onchangeHandler} value={form.image} />
//                     {errors.image && <span className="text-danger">{errors.image}</span>}
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default UpdateDoctor;
