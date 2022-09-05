import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
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
        <AboutMe />
        <Skills />
        <Education />
        <Projects />
        {/* <Contact /> */}
      </main>
    </>
  );
}

export default App;
