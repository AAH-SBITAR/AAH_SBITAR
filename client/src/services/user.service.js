import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/test/";

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
