import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Myskills from "./components/Myskills";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import SchoolTimeline from "./components/SchoolTimeline";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <SchoolTimeline/>
      
      <Myskills />
      <MyProjects />
      <ContactMe />
    </div>
  );
};

export default App;
