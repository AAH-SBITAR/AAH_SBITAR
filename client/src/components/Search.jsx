import axios from "axios";
import React from "react";
import { useState } from "react";
import OnePatientSearched from "./OnePatientSearched";

function Search() { 
    const [searchPat, setSearchPat] = useState('')
    const [onePatient, setOnePatient] = useState("");
    const [show, setShow] = useState("search");

    let searchFunction = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:3000/patient/getOne/${searchPat}`).then((data) => {
            console.log(data.data);
            setOnePatient(data.data)
            setShow("onePatient")
        }).catch(err=>console.log(err))
    }
    return (
      <div
        style={{
          display: 'flex',
          alignItems: "center",
          justifyContent: "center",
        height : "20vh"
        }}

      >
            
            
       {show==='search' && <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Patient By ID card"
            aria-label="Search"
            onChange={(e) => {
              setSearchPat(e.target.value);
            }}
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => searchFunction(e)}
          >
            Search
                </button>
            </form>

                }
           
           {show==='onePatient' && <OnePatientSearched onePatient={onePatient} />}
      </div>
    );

}
export default Search;
