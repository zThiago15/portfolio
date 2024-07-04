import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

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
