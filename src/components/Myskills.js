import React, { useEffect } from "react";
import { SiReact, SiIonic, SiAngular, SiJava, SiSpring, SiFirebase, SiGit, SiJenkins, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import Overlay from "./Overlay";

const Myskills = () => {
  const skills = [
    { icon: <SiReact />, title: "React Native" },
    { icon: <SiIonic />, title: "Ionic" },
    { icon: <SiAngular />, title: "Angular" },
    { icon: <SiJava />, title: "Java" },
    { icon: <SiSpring />, title: "Spring Boot" },
    { icon: <SiFirebase />, title: "Firebase" },
    { icon: <SiGit />, title: "Git" },
    { icon: <SiJenkins />, title: "Jenkins" },
    { icon: <SiAdobexd />, title: "Adobe XD" },
    { icon: <SiAdobephotoshop />, title: "Adobe Photoshop" },
    { icon: <SiAdobeillustrator />, title: "Adobe Illustrator" },
  ];

  useEffect(() => {
    // Your code that uses the openMenu variable
  }, []); // Add dependencies if needed

  return (
    <div className="my-8 mx-auto max-w-screen-md p-4">
      <h2 className="text-center text-3xl font-bold pb-4">My Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="w-1/2 md:w-1/4 p-4 text-center">
            <div className="text-2xl mb-2">{skill.icon}</div>
            <h6 className="text-md font-semibold">{skill.title}</h6>
          </div>
        ))}
      </div>
      <Overlay />
    </div>
  );
};

export default Myskills;
