import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";


function Doctor() {
  const [check, setCheck] = useState(false)
  const [view, setView] = useState("patients");
  const [CIN, setCIN] = useState({});
  console.log(CIN);
  let Search = (e) => {
    e.preventDefault()
    fetch (`/patient/getOne/${CIN}`)
      .then((response) => {
        return response.json()

      }
      )
      .then(data => console.log(data))
    
      .catch(err => console.error(err))

    }
 
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


        <form className="form-inline">
          <input onChange={(event) => setCIN(event.target.value)}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for a Patient by ID"
            aria-label="Search"
          />
          <button onClick={(e) => { Search(e) }}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>



      {view === "search" && <Search />}
    </div>
  );
}

export default Doctor;
