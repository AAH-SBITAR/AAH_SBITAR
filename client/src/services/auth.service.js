import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

//function to  make login/register request.
//  methods use axios to make HTTP requests. 
//Its also store or get JWT from Browser Local Storage inside these methods.

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, roles, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      roles,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));;
  }
}

export default new AuthService();