import Overlay from "./Overlay";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  
  FaLinkedin,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <div id="contact-me"></div>
      <section className="mt-16 text-white relative">
        <div className="relative z-10">
          <div className=" p-10 max-w-3xl m-auto flex flex-col sm:flex-row justify-evenly">
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ia_abedmeraim@esi.dz"
                  target="_blank"
                  className="flex items-center flex-wrap space-x-2"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaEnvelope color="#ea4335" />
                  </span>
                  <span>salmanartist03@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center flex-wrap space-x-2"
                  href="tel:0540625774"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaPhoneAlt color="#34a853" />
                  </span>
                  <span>+212680293246</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SalmanId"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center flex-wrap  space-x-2"
                >
                  <span>
                    <FaGithub />
                  </span>
                  <span>SalmanId</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/salman-id-said-a61176220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center flex-wrap  space-x-2"
                >
                  <span>
                    <FaLinkedin />
                  </span>
                  <span>Salman Id said</span>
                </a>
              </li>
              
              
            </ul>
            
          </div>
          <footer
            className="flex justify-center items-center space-x-1 p-8 pt-4 border-t"
            style={{ borderColor: "#555" }}
          >
            <p>
              Made by{" "}
              <a
                style={{ color: "#42d0fd" }}
                className="hover:underline"
                
              >
                Salman
              </a>
            </p>
            <span>. &copy; {new Date().getFullYear()}</span>
          </footer>
        </div>
        <Overlay></Overlay>
      </section>
    </>
  );
};

export default ContactMe;
