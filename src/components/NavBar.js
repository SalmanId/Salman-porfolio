import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaRegUser,
} from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { SiReact } from "react-icons/si";
import { GiBrain, GiEnvelope } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [newstyle, setNewstyle] = useState("");

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (openMenu) {
        setOpenMenu(false);
      }
    });

    window.addEventListener("scroll", (e) => {
      const top = document.body.scrollTop || document.documentElement.scrollTop;
      if (top > 0) {
        setNewstyle("linear-gradient(to bottom,#111 10%,#333)");
      } else {
        setNewstyle("");
      }
    });
  }, []);

  return (
    <nav
      className={`py-3 px-10 shadow-2xl border-b flex justify-between items-center fixed top-0 left-0 w-full text-white z-50`}
      style={{ borderColor: "#333", background: `${newstyle}` }}
    >
      <h2 className="font-semibold sm:text-xl text-gray-300">
        
        Salman . Id 
      </h2>
      <div className="flex items-center space-x-6 text-lg">
        <ul className="space-x-6 items-center hidden sm:flex">
          <li>
            <a
              href="https://github.com/SalmanId"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          
          <li>
            <a
              href="https://www.linkedin.com/in/salman-id-said-a61176220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          
        </ul>
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenu((prev) => !prev);
            }}
            className="cursor-pointer hover:text-blue-500 transition flex items-center justify-center"
          >
            <BiMenuAltRight fontSize="25px" />
          </button>
          {openMenu && (
            <ul className="shadow-lg rounded text-base bg-white text-gray-600 absolute top-11 right-0 w-48">
              <li>
                <a
                  className="flex capitalize items-center space-x-2 p-2 border-b w-full hover:bg-gray-200"
                  href="#about-me"
                >
                  <FaRegUser color="#42d0fd" />
                  <span>About me</span>
                </a>
              </li>
              <li>
                <a
                  className="flex capitalize items-center space-x-2 p-2 border-b w-full hover:bg-gray-200"
                  href="#SchoolTimeline"
                >
                  <FaRegUser color="#42d0fd" />
                  <span>Educational Pathway</span>
                </a>
              </li>
              <li>
                <a
                  className="flex capitalize items-center space-x-2 p-2 border-b w-full hover:bg-gray-200"
                  href="#SchoolTimeline"
                >
                  <FaRegUser color="#42d0fd" />
                  <span>Professional Career</span>
                </a>
              </li>

              <li>
                <a
                  className="flex capitalize items-center space-x-2 p-2 border-b w-full hover:bg-gray-200"
                  href="#my-skills"
                >
                  <GiBrain color="#42d0fd" />
                  <span>My skills</span>
                </a>
              </li>
              <li>
                <a
                  className="flex capitalize items-center space-x-2 p-2 w-full hover:bg-gray-200"
                  href="#my-projects"
                >
                  <RiComputerLine color="#42d0fd" />
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  className="flex capitalize items-center space-x-2 p-2 w-full hover:bg-gray-200"
                  href="#contact-me"
                >
                  <GiEnvelope color="#42d0fd" />
                  <span>Contact me</span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
