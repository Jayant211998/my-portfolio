import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <About />
     <Skills/>
     <Projects/>
     <ContactMe/>
    </div>
  );
}

export default App;
