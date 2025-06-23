import axios from "axios";
import React from "react";
import { useState } from "react";
import "./home.css";


function AddPatient() {
  const [form, setForm] = useState({});
  const [diabete, setDiabete] = useState(false);
  const [Asthma, setAsthma] = useState(false);
  const [heart, setHeart] = useState(false);
  const [cancer, setCancer] = useState(false);
  // const [date,setDate] = new Date().toLocaleString()

  const onchangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHundler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/patient/add", {
        ...form,
        diabete,
        Asthma,
        heart,
        cancer,
      })
      .then((response) => {
        alert(response.data.message);
                window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      AddPatient
      <div className="container">
        <form onSubmit={submitHundler}>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="patient Name"
              onChange={onchangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="IDcard">IDcard</label>
            <input
              type="text"
              className="form-control"
              name="IDcard"
              placeholder="patient IDcard"
              onChange={onchangeHandler}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              placeholder="patient age"
              onChange={onchangeHandler}
            />
          </div>

          <div className="form-group">
            <label htmlFor="number">number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="patient number"
              onChange={onchangeHandler}
            />
          </div>

          <div className="form-group">
            <label htmlFor="number">Appointement</label>
            <input
              type="date"
              className="form-control"
              name="nextRDV_2"
              onChange={onchangeHandler}
            />
          </div>


          <div className="form-group">
            <label htmlFor="chronic">chronic disease</label>
            diabete :
            <input
              type="checkbox"
              defaultChecked={diabete}
              className="form-control"
              name="diabete"
              placeholder="diabete "
              onChange={() => {
                setDiabete(!diabete);
              }}
            />{" "}
            <br />
            Asthma :{" "}
            <input
              type="checkbox"
              defaultChecked={Asthma}
              className="form-control"
              name="Asthma"
              placeholder="Asthma "
              onChange={() => {
                setAsthma(!Asthma);
              }}
            />
            Heart :
            <input
              type="checkbox"
              defaultChecked={heart}
              className="form-control"
              name="heart"
              onChange={() => {
                setHeart(!heart);
              }}
            />
            Cancer :{" "}
            <input
              type="checkbox"
              defaultChecked={cancer}
              className="form-control"
              name="cancer"
              onChange={() => {
                setCancer(!cancer);
              }}
            />
          </div>

          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPatient;
