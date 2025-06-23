// import React, { useState, useEffect } from "react";
// import "./home.css";
// import UserService from "../services/user.service";

// // Home component is public page that shows all about hospital and all doctors.
// //People don’t need to log in to view this page.

// function Home() {
//   const [content, setContent] = useState("");
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     UserService.getPublicContent().then(
//       (response) => {
//         setContent(response.data);
//       },
//       (error) => {
//         setContent(
//           (error.response && error.response.data) ||
//             error.message ||
//             error.toString()
//         );
//       }
//     );
//   }, []);

//   return (
//     <div>
//       <div className="card">
//         <h2>Coordinates</h2>
//         <p>
//           <h4>Number</h4>
//           <i class="fa fa-phone"></i>
//           <a href="tel:(+216) 31 22 77 99">(+216) 31 22 77 99</a>
//           <br />
//           <br />
//           <h4>Adress</h4>
//           <i class="fa fa-map-marker"></i>
//           The Sbitar international hospital center is located at the
//           Technological Pole of El Ghazela
//           <br />
//           1081 Tunis, Tunisie
//           <br />
//           <a href="mailto:carthagene@ihct.com.tn">✉AAH_Sbit@ihct.com.tn</a>
//           <br />
//         </p>
//       </div>
//       <div
//         className="mapouter "
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "90vh",
//         }}
//       >
//         <div className="gmap_canvas c">
//           <iframe
//             className="gmap_iframe "
//             frameborder="0"
//             scrolling="no"
//             marginheight="0"
//             marginwidth="0"
//             src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=RBK gh&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//           ></iframe>
//           <a href="https://piratebay-proxys.com/">Piratebay</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { MapPin, Phone, Mail, Stethoscope, UserPlus } from "lucide-react";
// import heroImage from "../assets/hospital.jpg"; // Assurez-vous d'avoir une image dans ce chemin

// function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center w-full">
//       {/* Hero section */}
//       <div
//         className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="bg-black bg-opacity-50 p-8 rounded-xl">
//           <h1 className="text-4xl font-bold mb-4">Bienvenue à Sbitar</h1>
//           <p className="text-lg mb-6">
//             Votre santé, notre priorité. Découvrez nos services et notre équipe
//             médicale.
//           </p>
//           <div className="flex gap-4 justify-center">
//             <Link to="/doctors">
//               <Button variant="secondary">Voir les médecins</Button>
//             </Link>
//             <Link to="/appointment">
//               <Button variant="default">Prendre un rendez-vous</Button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Informations */}
//       <div className="max-w-5xl w-full px-4 py-12 grid md:grid-cols-2 gap-6">
//         <Card className="shadow-md">
//           <CardContent className="p-6">
//             <h2 className="text-2xl font-semibold mb-4">Coordonnées</h2>
//             <div className="flex items-center mb-2">
//               <Phone className="mr-2" />
//               <a href="tel:+21631557799" className="hover:underline">
//                 (+216) 31 55 77 99
//               </a>
//             </div>
//             <div className="flex items-start mb-2">
//               <MapPin className="mr-2 mt-1" />
//               <p>Technological Pole El Ghazela, 1081 Tunis, Tunisie</p>
//             </div>
//             <div className="flex items-center">
//               <Mail className="mr-2" />
//               <a href="mailto:aah_sbit@ihct.com.tn" className="hover:underline">
//                 aah_sbit@ihct.com.tn
//               </a>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="shadow-md">
//           <CardContent className="p-6">
//             <h2 className="text-2xl font-semibold mb-4">Nos Services</h2>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>
//                 <Stethoscope className="inline mr-2" /> Consultations générales
//               </li>
//               <li>
//                 <UserPlus className="inline mr-2" /> Suivi des patients
//               </li>
//               <li>
//                 <Stethoscope className="inline mr-2" /> Gestion des rendez-vous
//               </li>
//               <li>
//                 <UserPlus className="inline mr-2" /> Accès au dossier médical
//               </li>
//             </ul>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Google Map */}
//       <div className="w-full max-w-5xl px-4 pb-12">
//         <h2 className="text-2xl font-semibold mb-4">Où nous trouver ?</h2>
//         <div className="aspect-video shadow-md rounded-xl overflow-hidden">
//           <iframe
//             className="w-full h-full"
//             src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=fr&amp;q=El Ghazela Technological Park&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//             frameBorder="0"
//             allowFullScreen
//             aria-hidden="false"
//             tabIndex="0"
//             title="Sbitar Location"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from "react";
// import UserService from "../services/user.service";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Home() {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     UserService.getPublicContent().then(
//       (response) => {
//         setContent(response.data);
//       },
//       (error) => {
//         setContent(
//           (error.response && error.response.data) ||
//             error.message ||
//             error.toString()
//         );
//       }
//     );
//   }, []);

//   return (
//     <div className="container py-5">
//       {/* Hero Section */}
//       <div className="jumbotron text-center bg-light shadow-sm p-5 rounded">
//         <h1 className="display-4">Bienvenue à Sbitar</h1>
//         <p className="lead">Centre Hospitalier Moderne et Organisé</p>
//         <hr className="my-4" />
//         <p>Consultez nos services ou prenez un rendez-vous dès maintenant.</p>
//         <a
//           className="btn btn-primary btn-lg mx-2"
//           href="/doctors"
//           role="button"
//         >
//           Voir les médecins
//         </a>
//         <a
//           className="btn btn-success btn-lg mx-2"
//           href="/appointment"
//           role="button"
//         >
//           Prendre un rendez-vous
//         </a>
//       </div>

//       {/* Contact Info Section */}
//       <div className="row mt-5">
//         <div className="col-md-6 mb-4">
//           <div className="card h-100 shadow">
//             <div className="card-body">
//               <h3 className="card-title mb-4">Coordonnées</h3>
//               <p>
//                 <strong>Téléphone :</strong>{" "}
//                 <a href="tel:+21631557799">(+216) 31 55 77 99</a>
//               </p>
//               <p>
//                 <strong>Adresse :</strong>
//                 <br />
//                 Technological Pole El Ghazela
//                 <br />
//                 1081 Tunis, Tunisie
//               </p>
//               <p>
//                 <strong>Email :</strong>{" "}
//                 <a href="mailto:aah_sbit@ihct.com.tn">aah_sbit@ihct.com.tn</a>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6 mb-4">
//           <div className="card h-100 shadow">
//             <div className="card-body">
//               <h3 className="card-title mb-4">Nos Services</h3>
//               <ul>
//                 <li>Consultations générales</li>
//                 <li>Suivi médical des patients</li>
//                 <li>Gestion des rendez-vous</li>
//                 <li>Accès au dossier médical</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="mt-5">
//         <h3 className="mb-3">Où nous trouver ?</h3>
//         <div className="embed-responsive embed-responsive-16by9 shadow rounded">
//           <iframe
//             className="embed-responsive-item"
//             src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=fr&amp;q=El Ghazela Technological Park&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//             allowFullScreen
//             title="Sbitar Location"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./home.css";

// function Home() {
//   return (
//     <div className="container py-5">
//       <div className="text-center mb-5">
//         <h1 className="display-4">Bienvenue à AAH_Sbitar</h1>
//         <p className="lead">
//           Centre Hospitalier International - El Ghazala, Tunis
//         </p>
//       </div>

//       <div className="row mb-4">
//         <div className="col-md-6">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h4 className="card-title">Nos Coordonnées</h4>
//               <p className="card-text">
//                 <strong>Téléphone :</strong> <br />
//                 <a href="tel:+21631557799">(+216) 31 55 77 99</a>
//                 <br />
//                 <br />
//                 <strong>Adresse :</strong> <br />
//                 Technopôle El Ghazala, 1081 Tunis, Tunisie
//                 <br />
//                 <br />
//                 <strong>Email :</strong> <br />
//                 <a href="mailto:AAH_Sbit@ihct.com.tn">AAH_Sbit@ihct.com.tn</a>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h4 className="card-title">Nos Services</h4>
//               <ul className="list-unstyled">
//                 <li>✔️ Prise de rendez-vous</li>
//                 <li>✔️ Consultation médicale</li>
//                 <li>✔️ Accès au dossier médical</li>
//                 <li>✔️ Informations sur nos médecins</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h4 className="card-title">Nous localiser</h4>
//               <div className="mapouter">
//                 <div className="gmap_canvas">
//                   <iframe
//                     title="Sbitar Location"
//                     width="100%"
//                     height="400"
//                     frameBorder="0"
//                     scrolling="no"
//                     marginHeight="0"
//                     marginWidth="0"
//                     src="https://maps.google.com/maps?q=technopole%20el%20ghazela&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="jumbotron text-center bg-light shadow-sm p-5 rounded mb-5 hero mb-4">
        <h1 className="display-4">Bienvenue à Sbitar</h1>
        <p className="lead">Centre Hospitalier Moderne et Organisé</p>
        <hr className="my-4" />
        <p>Consultez nos services ou prenez un rendez-vous dès maintenant.</p>
        <a
          className="btn btn-primary btn-lg mx-2"
          href="/doctors"
          role="button"
        >
          Voir les médecins
        </a>
        <a
          className="btn btn-success btn-lg mx-2"
          href="/appointment"
          role="button"
        >
          Prendre un rendez-vous
        </a>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Nos Coordonnées</h4>
              <p className="card-text">
                <strong>Téléphone :</strong> <br />
                <a href="tel:+21653423081">(+216) 53 423 081</a>
                <br />
                <br />
                <strong>Adresse :</strong> <br />
                Technopôle El Ghazala, 1081 Tunis, Tunisie
                <br />
                <br />
                <strong>Email :</strong> <br />
                <a href="mailto:admin@Sbitar.tn">admin@sbitar.tn</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Nos Services</h4>
              <ul className="list-unstyled">
                <li>✔️ Prise de rendez-vous</li>
                <li>✔️ Consultation médicale</li>
                <li>✔️ Accès au dossier médical</li>
                <li>✔️ Informations sur nos médecins</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Nous localiser</h4>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title="Sbitar Location"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?q=technopole%20el%20ghazela&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
