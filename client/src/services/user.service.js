import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/test/";

// This class uses auth-header() helper function to add JWT to HTTP header. 
//auth-header() returns an object containing the JWT of the currently logged in user from Local Storage.

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getReceptionistBoard() {
    return axios.get(API_URL + "resep", { headers: authHeader() });
  }

  getDoctorBoard() {
    return axios.get(API_URL + "doct", { headers: authHeader() });
  }
}
export default new UserService();
