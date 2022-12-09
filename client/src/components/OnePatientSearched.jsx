import React from "react";

function OnePatientSearched({ onePatient }) {
  return (
      <div >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="my-5">
              <h3> {onePatient.name} </h3>
              <hr />
            </div>
            <form class="file-upload">
              <div class="row mb-5 gx-5">
                <div class="col-xxl-8 mb-5 mb-xxl-0">
                  <div class="bg-secondary-soft px-4 py-5 rounded">
                    <div class="row g-3">
                      <h4 class="mb-4 mt-0">Patient detail</h4>
                      <div class="col-md-6">
                        <label class="form-label">ID card</label>
                        <input
                          readonly
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="First name"
                          value={onePatient.IDcard}
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">age </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Last name"
                          value={onePatient.age}
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Phone number *</label>
                        <input
                          type="text"
                          class="form-control"
                          value={onePatient.phone}
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Medicaments</label>
                        <input
                          type="text"
                          class="form-control"
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
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnePatientSearched;
