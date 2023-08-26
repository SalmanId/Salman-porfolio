import { FaHome } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";
import H2 from "./H2";
const AboutMe = () => {
  return (
    <>
      <div id="about-me"></div>
      <section className="p-10 mt-10 text-gray-700 max-w-3xl m-auto">
        <H2># About Me :</H2>
        <article className="flex flex-wrap items-center justify-center mt-4">
          <img
            className="h-40 w-40 rounded-full"
            src="./assets/chelfi2.jpg"
            alt="abdelbassit face"
          />
          <ul className="space-y-4 p-4 min-w-max">
            <li className="flex items-start space-x-3">
              <FaHome color="#42d0fd" fontSize="22px" />
              <span>
                Lives in <strong>Rabat, Morocco
                  </strong>.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <IoSchool color="#42d0fd" fontSize="22px" />
              <span>
                Final year student  at <strong>ESI </strong>.
              </span>
            </li>
            
          </ul>
        </article>
        <H2>## BIO :</H2>
        <p className="my-4 text-gray-500 leading-7">
          Hey, I am Id.said Salman, a dedicated student pursuing a degree in Information Systems and Digital Transformation Engineering. With an unwavering ardor for learning, I consistently demonstrate an innate ability to grasp complex concepts swiftly.My journey thus far has endowed me with substantial proficiency in the realm of mobile development, a testament to my ceaseless enthusiasm and commitment. Furthermore, my repertoire extends beyond this, encompassing diverse domains such as Machine Learning, Fullstack Web Development, and Business Intelligence.
        </p>
      </section>
    </>
  );
};

export default AboutMe;
