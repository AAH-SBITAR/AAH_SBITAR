import React, { Component} from "react";
import "./home.css"
import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
       
      
      <div style={{
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        
      }}>
        <h2>Search for Doctor</h2>
      <form className="search" action="action_page.php">
      
        <input type="text" placeholder="Find a Doctor..." name="search" />
        
        <button type="submit"><i className="fa fa-search">Search</i></button>
      </form>
      </div>
     );
  }
}