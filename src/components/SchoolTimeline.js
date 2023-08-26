import React from "react";
import "./SchoolTimeline.css"; // Assurez-vous de créer un fichier CSS pour le style de la timeline

const SchoolTimeline = () => {
  const schools = [
    {
      name: "The School of Information Sciences (ESI)",
      date: "2021 - 2024",
      description: "Information Systems and Digital Transformation Engineering",
      image: "./logo-esi-rabat.jpg", // Ajoutez le chemin vers l'image de l'école
    },
    {
      name: "CPGE  Ibn Timiya",
      date: "2019 - 2021",
      description: "Mathematics Physics",
      image: "./Cpge.jpg",
    },
    {
      name: "High School Mohamed 6",
      date: "2018 - 2019",
      description: "Bac science math.",
      image: "./m6.png",
    },
  ];

  const experiences = [
    {
      company: "ISGA",
      role: "Mobile Developer",
      date: "July 2023 - Sep 2023",
      description: "Within the realm of my internship project, I undertook the development of a mobile application using the synergistic technologies of Ionic, Angular, and Firebase. The application stands as a testament to the integration of advanced mobile development techniques with the sophisticated features of Firebase's backend services. Furthermore, the application is seamlessly linked with a native PHP API, intricately designed and developed by the esteemed engineering institution, ISGA (Institut Supérieur du Génie Appliqué).",
      image: "./ISGAlogo.png",
    },
    {
      company: "InfoSys",
      role: "Fullstack  Developer",
      date: " Aug 2022",
      description: "During my introductory internship at a company specializing in software development and information system integration, my project revolved around the creation of a web application. This application was designed to facilitate hotel reservations for 'Shotel,' an establishment in the hospitality sector. The development process leveraged PHP, Bootstrap, and JavaScript, weaving together a seamless and efficient online booking system.",
      image: "./Infosys.png",
    },
  ];

  return (
    <div className="school-timeline-container" id="SchoolTimeline">
      <div className="timeline-column">
        <h1 className="timeline-header">Academic Journey</h1>
        <div className="timeline">
          {schools.map((school, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-item-image">
                <img src={school.image} alt={school.name} />
              </div>
              <div className="timeline-item-content">
                <span className="timeline-item-date">{school.date}</span>
                <h2 className="timeline-item-name">{school.name}</h2>
                <p className="timeline-item-description">{school.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="timeline-column">
        <h1 className="timeline-header">Professional Path</h1>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-item-image">
                <img src={experience.image} alt={experience.name} />
              </div>
              <div className="timeline-item-content">
                <span className="timeline-item-date">{experience.date}</span>
                <h2 className="timeline-item-name">{experience.company}</h2>
                <h3 className="timeline-item-role">{experience.role}</h3>
                <p className="timeline-item-description">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolTimeline;
