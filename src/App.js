
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Summary from './components/Summary';

function App() {
  return (
   <>
    <main class="font-sans bg-white">
    <Navbar />
    <About />
    <Summary />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </main>
  
   </>
  );
}

export default App;
