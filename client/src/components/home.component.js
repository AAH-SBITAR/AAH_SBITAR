import React, { useState, useEffect} from "react";
import "./home.css"
import UserService from "../services/user.service";

 function Home (){
  const [content, setContent] = useState("")
  const [search, setSearch] = useState("")

    useEffect(() => {
       UserService.getPublicContent().then(
      response => {
        setContent(response.data);
      },
      error => {
        setContent(
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        );
    })
 }, []);

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

export default Home;
