import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/home.css";

// This is the root container for our application.

import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import AboutUs from "./components/AboutUs";
import AllDoctors from "./components/AllDoctors";
import Profile from "./components/profile.component";
import BoardUser from "./components/Board-User";
import Receptionist from "./components/Board-Receptionist";
import Doctor from "./components/Board-Doctor";
import Profile_Doctor from "./components/ProfileDoctor.jsx";
import UpdatePatient from "./components/UpdatePatient.js";

//add a navigation bar in App component.

//The navbar dynamically changes by login status and current User’s roles.

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showReceptionistBoard: false,
      showDoctorBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showReceptionistBoard: user.roles.includes("RECEPTIONIST"),
        showDoctorBoard: user.roles.includes("DOCTOR"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showReceptionistBoard: false,
      showDoctorBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showReceptionistBoard, showDoctorBoard } = this.state;

    return (
      <div className="home" style={{ height: "100%" }}>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
<img
  src="/icon.png"
  alt="Logo"
  style={{ maxHeight: "40px", marginRight: "10px" }}
/>
            Sbitar
            
          </Link>
          <div className="navbar-nav mr-auto">
            {!showDoctorBoard && !showReceptionistBoard && (
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
            )}
            {!showDoctorBoard && !showReceptionistBoard && (
              <li className="nav-item">
                <Link to={"/aboutUs"} className="nav-link">
                  AboutUs
                </Link>
              </li>
            )}

            {!showDoctorBoard && (
              <li className="nav-item">
                <Link to={"/doctors"} className="nav-link">
                  Doctors
                </Link>
              </li>
            )}

            {showReceptionistBoard && (
              <li className="nav-item">
                <Link to={"/recept"} className="nav-link">
                  Receptionist Board
                </Link>
              </li>
            )}

            {showDoctorBoard && (
              <li className="nav-item">
                <Link to={"/doct"} className="nav-link">
                  Doctor Board
                </Link>
              </li>
            )}

            {!currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Patient
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              {showDoctorBoard && (
                <li className="nav-item nav-link">Welcome Dr.</li>
              )}
              {showReceptionistBoard && (
                <li className="nav-item nav-link">Welcome </li>
              )}
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/doctors" element={<AllDoctors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile_Doctor />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/recept" element={<Receptionist />} />
            <Route path="/doct" element={<Doctor />} />
            <Route path="/:id" element={<UpdatePatient />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
