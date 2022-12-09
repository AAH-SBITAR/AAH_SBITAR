import React, { useState } from "react";
import AddPatient from "./AddPatient";
import OnePatientSearched from "./OnePatientSearched";
import PatientList from "./PatientList";
import Search from "./Search";


function BoardDoctor() {
  const [view, setView] = useState("patients");
  const [onePatient, setOnePatient] = useState({});
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <p
          className="navbar-brand"
          onClick={() => {
            setView("patients");
          }}
        >
          Doctor Board
        </p>
       
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <p
                className="nav-link"
                onClick={() => {
                  setView("search");
                }}
              >
                Search Patient
              </p>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="border blur"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {view === "patients" && (
          <PatientList setView={setView} setOnePatient={setOnePatient} />
        )}
        {view === "add" && <AddPatient />}
        {view === "search" && <Search />}
        {view === "one" && <OnePatientSearched onePatient={onePatient} />}
      </div>
    </div>
  );
}

export default BoardDoctor;
