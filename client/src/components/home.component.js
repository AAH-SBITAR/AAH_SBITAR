import React, { useState, useEffect } from "react";
import "./home.css"
import UserService from "../services/user.service";

// Home component is public page that shows all about hospital and all doctors.
//People don’t need to log in to view this page.

function Home() {
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
    <div>

      <div className="card">
        <h2>Coordinates</h2>
        <p>
          <h4>Number</h4>
          <i class="fa fa-phone"></i><a href="tel:(+216) 31 55 77 99">(+216) 31 55 77 99</a>
          <br /><br />
          <h4>Adress</h4>
          <i class="fa fa-map-marker">
          </i>
          The AAH_Sbitar international hospital center is located at the Technological Pole of El Ghazela
          <br />
          1081 Tunis, Tunisie
          <br />

          <a href="mailto:carthagene@ihct.com.tn">✉AAH_Sbit@ihct.com.tn</a>
          <br />

        </p>
      </div>
      <div className="mapouter " style={{

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',

      }}>
        <div className="gmap_canvas c">
          <iframe className="gmap_iframe " frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=RBK gh&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
          <a href="https://piratebay-proxys.com/">Piratebay</a>
        </div>
      </div>

    </div>
  );

}

export default Home;
