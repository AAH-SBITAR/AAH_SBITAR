import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { Link } from 'react-router-dom'
import Update_Patient from "./Update_Patient";
function OnePatientSearched({ onePatient }) {
  const [up, setUp] = useState(false);
  const Line = () => <hr />;
  const user = AuthService.getCurrentUser();


  return (
    <div>
      {!up && (<div>
        <div class="container row col-12 my-5">
          <h3> {onePatient.name} </h3>
          <Line />
          <hr /> <br />
        </div>
        <form class="file-upload">
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
                      aria-label="First name"
                      disabled
                      value={onePatient.IDcard}
                    />
                  </div>
                  <Line />

                  <div class="col-md-6">
                    <label class="form-label">age </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      aria-label="Last name"
                      disabled
                      value={onePatient.age}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Phone number *</label>
                    <input
                      type="text"
                      class="form-control"
                      disabled
                      value={onePatient.phone}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Medicaments</label>
                    <input
                      type="text"
                      class="form-control"
                      disabled
                      value={onePatient.medicament}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      medical Tests
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      disabled
                      value={onePatient.tests}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Note </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      aria-label="Phone number"
                      value={onePatient.note}
                      disabled
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">chronic desease </label>
                    {onePatient.diabete && (
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        aria-label="Phone number"
                        value="Diabete"
                        disabled
                      />
                    )}

                    {onePatient.Asthma && (
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        aria-label="Phone number"
                        value="Asthma"
                        disabled
                      />
                    )}
                    {onePatient.heart && (
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        aria-label="Phone number"
                        value="Heart"
                        disabled
                      />
                    )}
                    {onePatient.cancer && (
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        aria-label="Phone number"
                        value="Cancer"
                        disabled
                      />
                    )}
                    {!onePatient.diabete &&
                      !onePatient.Asthma &&
                      !onePatient.heart &&
                      !onePatient.cancer && (
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Phone number"
                          value="Have no chronic desease "
                          disabled
                        />
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
       
 </form>
      
        {user=="DOCTOR"&&(<button className="but_update" onClick={()=>setUp(!up)}>Update</button>)} <br></br></div> )}
        {up && <Update_Patient onePatient={onePatient} setUp={setUp} />}
      
    </div>
  );
}

export default OnePatientSearched;
