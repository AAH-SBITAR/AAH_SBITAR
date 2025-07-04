// import React, { Component } from 'react'
// import "./home.css";


// export default class AboutUs extends Component {
//   render() {
//     return (
//         <div className='card' style={{ height: "100%" }}>

//         <h3 >
//          AAH_Sbitar's is an acute General Public Voluntary Hospital.
//           <p>
//            AAH_Sbitar's Hospital is a Registered Charity under the Charities Acts (Registered Charity No. 20000394) and is administered and managed in accordance with a Hospital Constitution approved by the Charities Regulatory Authority.  The current Hospital Constitution was approved in 2018.  The property is vested in Trustees.
    
//             The Hospital has a total of 99 beds – 89 In-Patient beds and 10 Day Care beds. The In-Patient specialties are General Medicine, General Surgery and Gynaecology. We also have an Urgent Care Centre incorporating a Local Injuries Unit and Medical Assessment Unit.
    
//             <h3>Other services include:</h3>
//           </p>
//           <p>
//             <ul>
    
//               <li>Consultant Out-Patient Clinics</li>
//               <li>Diagnostic Radiological and Laboratory services</li>
//               <li>Day Surgery</li>
//               <li>Clinical Nurse Specialists in the areas of Diabetes, Continence Management, Respiratory Care, Health Promotion, Infection Control, Palliative Care and Pain Management</li>
//               <li>A dietetic service providing nutritional assessment, dietary advice, education and evaluation</li>
//               <li>Physiotherapy and Pharmacy services</li>
//               <li>Chaplaincy Service</li>
    
//             </ul>
//           </p>
//           Mission Statement
//           <p>
//             “Faithful to our tradition, we provide the highest possible standard of care and treatment in a professional and compassionate manner to every person who avails of our services”
//           </p>
//           Vision and Values
//           <p>
    
//             Based on our Mission Statement, our vision and values are:
//             <ul>
//               <li>To build a first class patient focused service based on high quality and evidence based practice throughout the organisation.</li>
//               <li>To provide this service as close to the patient as possible, in a well-managed and appropriate environment.</li>
//               <li>To promote a culture that will:</li>
//               <ul>
//                 <li>Ensure high quality care/service is provided.</li>
//                 <li>Ensure that decisions regarding delivery of care/service are patient focused and evidence based.</li>
//                 <li>Support and invest in education and training, thereby promoting the continuous development of the workforce in order to maximise the potential of staff at all levels</li>
//               </ul>
//             </ul>
//           </p>
//           Goals
//           <p>
//             Our goals are to: –
//             <ul>
//               <li>Continuously improve all our services through quality management</li>
//               <li>Focus on our patients and deliver high quality service</li>
//               <li>Involve all our partners in our quality improvement activities</li>
//               <li>Empower employees to make appropriate decisions</li>
//               <li>Have the highest degree of respect for one another and value diversity</li>
//               <li>Use training, teamwork and open communication to enable all employees to achieve their full potential</li>
//               <li>Recognise and reward employees’ contributions</li>
//               <li>Take all reasonable steps to ensure that patients, visitors, staff and all others in contact with the Hospital are afforded the safest possible environment.</li>
//               <li>Maintain the highest ethical standards in protecting the public and the environment</li>
//               <li>Measure the effectiveness of our activities and monitor progress towards achieving our Vision</li>
//             </ul>
//           </p>
//           History and Tradition
//           <p>
//             The Hospital was founded in 1780 by Lady Hartstonge and other benefactors as a Fever and Lock Hospital. It treated epidemics during the Great Famine (1845-1847). The Hospital fell into disrepair during the 1850’s to the 1880’s. In 1888 the then Bishop of Limerick, Bishop Edward Thomas O’Dwyer invited the Nursing Sisters of the Little Company of Mary to the Hospital.AAH_Sbitar's was the first site in Ireland where the Little Company of Mary Nursing Sisters came to work. Since then, on-going refurbishment and development has continued to take place. With the closure of Barrington’s Hospital in 1988,AAH_Sbitar's expanded its role, particularly in relation to Accident & Emergency. There has been continuous development since then.
//           </p><br />
//           <h3 className="smoke">Smoke Free Campus<br />
    
//            AAH_Sbitar's Hospital is a Smoke Free Campus<br />
    
//             Patients, staff and visitors are not permitted to smoke in the hospital buildings or on the hospital grounds</h3>
//           <p><br />
//             Under the Public Health Tobacco Amendment Bill governing smoking in the workplace, smoking is strictly prohibited in all hospital buildings.
//             <br />
//             As a member of the Health Promoting Hospitals Network, AAH_Sbitar's Hospital promotes a completely smoke-free environment throughout the entire hospital and grounds. The hospital has a duty to provide a healthy environment and a safe place for patients to be treated.
//           </p>
//           What we ask of patients who smoke:
//           <p>
//             <ul>
//               <li>Do not smoke while you are in hospital</li>
//               <li>Do not bring cigarettes into the hospital</li>
//               <li>Please support our efforts to create a healthy smoke free environment for all who come to the hospital</li>
//             </ul>
//             Smoking cessation counselling/therapy is available and any patient who wishes to avail of this service should inform the Senior Nurse on duty.
//           </p>
//           Patients who leave the hospital grounds to smoke do so at their own risk
//         </h3>
    
//       </div>
      
//     )
//   }
// }




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="card mb-4 p-4 shadow-sm">
        <h3 className="mb-3">À propos de AAH_Sbitar</h3>
        <p>
          AAH_Sbitar's est un hôpital général volontaire public enregistré comme œuvre de charité. Il dispose de 99 lits dont 89 pour hospitalisation et 10 en soins de jour. Les spécialités comprennent la médecine générale, la chirurgie et la gynécologie, ainsi qu'un centre de soins urgents.
        </p>
      </div>

      <div className="card mb-4 p-4 shadow-sm">
        <h4 className="mb-3">Autres services offerts</h4>
        <ul>
          <li>Cliniques externes spécialisées</li>
          <li>Services de radiologie et de laboratoire</li>
          <li>Chirurgie ambulatoire</li>
          <li>Infirmiers spécialisés (diabète, soins respiratoires, etc.)</li>
          <li>Services diététiques, de kinésithérapie et de pharmacie</li>
          <li>Service d’aumônerie</li>
        </ul>
      </div>

      <div className="card mb-4 p-4 shadow-sm">
        <h4 className="mb-3">Mission</h4>
        <p>
          "Fidèle à notre tradition, nous offrons le plus haut niveau de soins de manière professionnelle et compatissante à chaque patient."
        </p>
      </div>

      <div className="card mb-4 p-4 shadow-sm">
        <h4 className="mb-3">Vision et valeurs</h4>
        <ul>
          <li>Créer un service de qualité centré sur le patient</li>
          <li>Favoriser une culture de soins fondée sur des preuves</li>
          <li>Encourager la formation continue du personnel</li>
        </ul>
      </div>

      <div className="card mb-4 p-4 shadow-sm">
        <h4 className="mb-3">Objectifs</h4>
        <ul>
          <li>Amélioration continue des services</li>
          <li>Respect mutuel et diversité</li>
          <li>Utilisation de la formation et du travail d’équipe</li>
          <li>Reconnaissance de la contribution du personnel</li>
          <li>Création d’un environnement sécurisé et éthique</li>
        </ul>
      </div>

      <div className="card mb-4 p-4 shadow-sm">
        <h4 className="mb-3">Historique</h4>
        <p>
          Fondé en 1780, l’hôpital a traversé de nombreuses étapes historiques et continue à évoluer pour répondre aux besoins médicaux actuels. Il a accueilli les Sœurs de la Little Company of Mary en 1888 et a pris une nouvelle envergure après la fermeture de l’hôpital Barrington’s en 1988.
        </p>
      </div>

      <div className="card mb-4 p-4 shadow-sm">
        <h4 className="mb-3">Campus sans tabac</h4>
        <p>
          Il est strictement interdit de fumer dans ou autour de l’hôpital. Cette règle vise à garantir un environnement sain pour tous.
        </p>
        <ul>
          <li>Ne pas fumer pendant votre séjour</li>
          <li>Ne pas apporter de cigarettes</li>
          <li>Participer à la promotion de l’environnement sans tabac</li>
        </ul>
        <p>
          Des services d’aide au sevrage tabagique sont disponibles.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
