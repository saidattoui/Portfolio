import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Certifications from './Section/Certifications';
import Work from './Section/Work';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Certifications />
    <Work />
    <Contact />
  </div>
  );
}

export default App;
