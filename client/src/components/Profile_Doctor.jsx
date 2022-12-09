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
    <div className= "profil">
  { !up && ( <div className= "PDoct_div"   ><ul>
       <br/>
      {doctor.image ? <img src={doctor.image} alt="" className="prof-image"/>:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhjYFOnN0j51detjUhK5tA-XrJNn9WpSZ-Q&usqp=CAU" alt="" />}
     
       
      

       <li><label >Name:{doctor.username}</label></li>
        <li><label >Email:{doctor.email}</label></li>
        <li> <label >Occupation:
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <span key={index}>{role}</span>)}
        </label></li>
        { doctor.phone && <li className="spe"> Phone : {doctor.phone}</li>}
        { doctor.speciality && <li className="spe"> speciality : {doctor.speciality}</li>}

     </ul>
     <button className="but_update" onClick={()=>setUp(!up)}>Update</button> <br></br></div> )}
    {up && <Update_Doctor doctor={doctor} setUp={setUp} />}
   <br/>
    </div>
  );
      }

export default Doctor;