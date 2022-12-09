import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthService from "../services/auth.service";
import Update_Doctor from "./Update_Doctor";


var Doctor = () => {
  const [doctor, setDoctor] = useState({});
  const [up, setUp] = useState(false);
 
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
      axios.get(`http://localhost:3000/getOne/${currentUser.id}`).then((res) => {
     
       setDoctor(res.data);
       console.log(res);
       

    }).catch(err=>console.log(err));
  }, []);

  return (
    <div>
  { !up && ( <div><ul>
        <br /><br /><br />
      {doctor.image ? <img src="doctor.image" alt="" />:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhjYFOnN0j51detjUhK5tA-XrJNn9WpSZ-Q&usqp=CAU" alt="" />}
       <br /><br /> 
       { doctor.speciality && <li> speciality : {doctor.speciality}</li>}
      

       <li><label className="name">Name:{doctor.username}</label></li>
        <li><label className="email">Email:{doctor.email}</label></li>
        <li> <label className="role">Occupation:
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <span key={index}>{role}</span>)}
        </label></li>

     </ul>
     <button onClick={()=>setUp(!up)}>Update</button> </div> )}
    {up && <Update_Doctor doctor={doctor} setUp={setUp} />}
    </div>
  );
      }

export default Doctor;