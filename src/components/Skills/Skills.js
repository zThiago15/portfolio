import { BiCodeCurly } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai'
import { FaServer } from 'react-icons/fa';
import { useState } from 'react';
import './Skills.css';

function Skills() {

  const [openFrontEndSkills, setOpenFrontEndSkills] = useState(false);
  const [openBackEndSkills, setOpenBackEndSkills] = useState(false);

  const toggleSkills = (target) => {

    const skillsContents = document.querySelectorAll('.skills__content');
    let itemClass = target.parentNode.className;

    for (let i = 0; i < skillsContents.length; i += 1) {
      skillsContents[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
      target.parentNode.className = 'skills__content skills__open';
    }
  }

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Conhecimento técnico</span>

      <div className="skills__container container grid">

          <div className={openFrontEndSkills ? "skills__content skills__open" : "skills__content skills__close"}>
            <div className="skills__header">
              <BiCodeCurly className="skills__icon" />

              <div>
                <h1 className="skills__title">Desenvolvimento Front-end</h1>
                <span className="skills__subtitle">Mais de 1 ano</span>
              </div>

              <AiOutlineDown onClick={ () => setOpenFrontEndSkills(!openFrontEndSkills) } className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills_titles">
                  <h3 className="skills__name">HTML</h3>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills_titles">
                  <h3 className="skills__name">CSS</h3>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills_titles">
                  <h3 className="skills__name">JavaScript</h3>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills_titles">
                  <h3 className="skills__name">React.js</h3>
                </div>
              </div>
            </div>

          </div>
          
          <span className="skills_column"></span>
          <div className={openBackEndSkills ? "skills__content skills__open" : "skills__content skills__close"}>
            <div className="skills__header">
              <FaServer className="skills__icon" />

              <div>
                <h1 className="skills__title">Desenvolvimento Back-end</h1>
                <span className="skills__subtitle">Mais de 1 ano</span>
              </div>

              <AiOutlineDown onClick={ () => setOpenBackEndSkills(!openBackEndSkills) } className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills_titles">
                  <h3 className="skills__name">Node.js</h3>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills_titles">
                  <h3 className="skills__name">Docker</h3>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills_titles">
                  <h3 className="skills__name">PHP</h3>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills_titles">
                  <h3 className="skills__name">TypeScript</h3>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills_titles">
                  <h3 className="skills__name">Java</h3>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills_titles">
                  <h3 className="skills__name">MySQL</h3>
                </div>
              </div>
            </div>

          </div>

      </div>
    </section>
  );
};  

export default Skills;