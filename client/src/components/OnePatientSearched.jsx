import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
import UpdatePatient from "./UpdatePatient";
import axios from "axios";
function OnePatientSearched({ onePatient }) {
  const [up, setUp] = useState(false);
  const Line = () => <hr />;
  const user = AuthService.getCurrentUser();

  let deletePatient = () => {
    axios
      .delete(`http://localhost:3000/patient/delete/${onePatient.IDcard}`)
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {!up && (
        <div>
          <div className="container row col-12 my-5">
            <h3> {onePatient.name} </h3>
            <Line />
            <hr /> <br />
          </div>
          <form className="file-upload">
            <div className="row mb-5 gx-5">
              <div className="col-xxl-8 mb-5 mb-xxl-0">
                <div className="bg-secondary-soft px-4 py-5 rounded">
                  <div className="row g-3">
                    <h4 className="mb-4 mt-0">Patient detail</h4>
                    <Line />

                    <div className="col-md-6">
                      <label className="form-label">ID card</label>
                      <input
                        readOnly
                        type="text"
                        className="form-control"
                        placeholder=""
                        aria-label="First name"
                        disabled
                        value={onePatient.IDcard}
                      />
                    </div>
                    <Line />

                    <div className="col-md-6">
                      <label className="form-label"> * age </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        aria-label="Last name"
                        disabled
                        value={onePatient.age}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label"> * Phone number </label>
                      <input
                        type="text"
                        className="form-control"
                        disabled
                        value={onePatient.phone}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label"> * Medicaments</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled
                        value={onePatient.medicament}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label"> * medical Tests</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled
                        value={onePatient.tests}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label"> * Note </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        aria-label="notes"
                        value={onePatient.notes}
                        disabled
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label"> * next appointement </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        aria-label=""
                        value={onePatient.nextRDV_2}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">* chronic desease </label>
                      {onePatient.diabete && (
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Phone number"
                          value="✔   Diabete"
                          disabled
                        />
                      )}

                      {onePatient.Asthma && (
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Phone number"
                          value="✔   Asthma"
                          disabled
                        />
                      )}
                      {onePatient.heart && (
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Phone number"
                          value="✔   Heart"
                          disabled
                        />
                      )}
                      {onePatient.cancer && (
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Phone number"
                          value="✔   Cancer"
                          disabled
                        />
                      )}
                      {!onePatient.diabete &&
                        !onePatient.Asthma &&
                        !onePatient.heart &&
                        !onePatient.cancer && (
                          <input
                            type="text"
                            className="form-control"
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
          {user && user.roles == "DOCTOR" && (
            <button classNameName="but_update" onClick={() => setUp(!up)}>
              Update
            </button>
          )}{" "}
          {user && user.roles == "RECEPTIONIST" && (
            <button classNameName="but_update" onClick={() => deletePatient()}>
              Delete patient
            </button>
          )}{" "}
          <br></br>
        </div>
      )}
      {up && <UpdatePatient onePatient={onePatient} setUp={setUp} />}
    </div>
  );
}

export default OnePatientSearched;
