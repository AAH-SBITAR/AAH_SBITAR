import React, { Component } from "react";
import "./doctors.css"
import UserService from "../services/user.service";
import Search from "./Search";
import "./home.css";

// BoardUser component will be displayed by state user.roles. 
// In this component, we use user.service to access protected resources from Web API.

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
  
        
        <div className="search-box  p-4 shadow-sm">
  <h4 className="mb-3 center ">Recherche de dossier médical</h4>

<p className="mt-3 text-muted">
  🔍 Entrez votre ID (numéro de carte d'identité) pour consulter votre dernier rapport médical.
</p>
<img
  src="https://cdn-icons-png.flaticon.com/512/3875/3875430.png"
  alt="Medical File"
  style={{ maxWidth: "100px", marginTop: "1rem" }}
/>
  <Search />
<div className="mt-5 card p-3">
  <h5>📊 Statistiques d'utilisation :</h5>
  <ul>
    <li>+250 dossiers consultés cette semaine</li>
    <li>Mise à jour quotidienne des données</li>
    <li>100% confidentialité assurée</li>
  </ul>
</div>

        </div>

    );
  }
}