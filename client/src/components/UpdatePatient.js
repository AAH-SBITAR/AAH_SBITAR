import React from 'react'
import AuthService from "../services/auth.service";
import axios from 'axios';
import { useState } from 'react'


function UpdatePatient({onePatient , setUp}) {

    const Line = () => <hr />;

    const user = AuthService.getCurrentUser();
    const [form, setForm] = useState({});
    const [diabete, setDiabete] = useState(onePatient.diabete);
    const [Asthma, setAsthma] = useState(onePatient.Asthma);
    const [heart, setHeart] = useState(onePatient.heart);
    const [cancer, setCancer] = useState(onePatient.cancer);

    const onchangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHundler = (e) => {
        console.log(form);
        e.preventDefault()
        axios.put(`http://localhost:3000/patient/update/${onePatient.IDcard}`, {
            ...form,
            diabete,
            Asthma,
            heart,
            cancer,
          })
            .then(response => {
                alert(response.data.message)
                setUp()
                window.location.reload(false);


            })
            .catch(err => { console.log(err) })
    }

  return (
    <div>
      <div class="container row col-12 my-5">
        <h3> {onePatient.name} </h3>
        <Line />
        <hr /> <br />
      </div>

      <form class="file-upload"  onSubmit={submitHundler}>
        <div class="row mb-5 gx-5">
          <div class="col-xxl-8 mb-5 mb-xxl-0">
            <div class="bg-secondary-soft px-4 py-5 rounded">
              <div class="row g-3">
                <h4 class="mb-4 mt-0">Patient detail</h4>
                <Line />

                <div class="col-md-6">
                  <label class="form-label">ID card</label>
                  <input
                    readonly
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="idcard"
                    name="IDcard"
                    onChange={onchangeHandler}
                    defaultValue={onePatient.IDcard}
                    
                  />
                </div>
                <Line />

                <div class="col-md-6">
                  <label class="form-label">age </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="age"
                    name="age"
                    onChange={onchangeHandler}
                    defaultValue={onePatient.age}
                
                  />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Phone number *</label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    onChange={onchangeHandler}
                    defaultValue={onePatient.phone}
                    
                  />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Medicaments</label>
                  <input
                    type="text"
                    class="form-control"
                    name="medicament"
                    onChange={onchangeHandler}
                    defaultValue={onePatient.medicament}
                    
                  />
                </div>
                <div class="col-md-6">
                  <label  class="form-label">
                    medical Tests
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="tests"
                    onChange={onchangeHandler}
                    defaultValue={onePatient.tests}
                    
                  />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Note </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="notes"
                    name="notes"
                    onChange={onchangeHandler}
                    defaultValue={onePatient.notes}
                    
                  />
                </div>
                <div className="form-group">
            <label htmlFor="number">Appointement</label>
            <input
              type="date"
              className="form-control"
              name="nextRDV_2"
              onChange={onchangeHandler}
              defaultValue={onePatient.nextRDV_2}
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
                
              </div>
            </div>
          </div>
        </div>
        <button className="but_update" >update</button>
      </form>
   
    </div>
  );
}

export default UpdatePatient