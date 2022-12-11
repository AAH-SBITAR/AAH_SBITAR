import React, { Component } from "react";
import "./doctors.css"
import UserService from "../services/user.service";
import Search from "./Search";

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
      <div className="container ">
        <header className="jumbotron card ">
          <h3>If you want to search for your patient to see more information about his health state, you can enter his IDcard in the search below:</h3>
          <Search />
        </header>
      </div>
    );
  }
}