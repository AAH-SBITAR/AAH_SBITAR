import React, { useState } from "react";
import AddPatient from "./AddPatient";
import PatientList from "./PatientList";
import Search from "./Search";


function Receptionist() {
  const [check, setCheck] = useState(false)
  const [view, setView] = useState("patients");
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <p
          className="navbar-brand"
          onClick={() => {
            setView("patients");
          }}
        >
          Receptionist Board
        </p>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <p
                className="nav-link"
                onClick={() => {
                  setView("add");
                }}
              >
                Add Patient
              </p>
            </li>
          </ul>
        </div>
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
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
      {view === "patients" && <PatientList />}

      {view === "add" && <AddPatient />}
      {view === "search" && <Search />}
    </div>
  );
}

export default Receptionist;
