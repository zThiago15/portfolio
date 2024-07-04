import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <hr />
        <AboutMe />
        <hr />
        <Skills />
        <hr />
        <Education />
        <hr />
        <Projects />
        <hr />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
