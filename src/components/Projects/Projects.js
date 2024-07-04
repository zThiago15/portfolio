import { useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { projectData } from '../../data/projectData';
import './Project.css';
import { FaFileAlt } from 'react-icons/fa';

function Projects() {

  const [current, setCurrent] = useState(0);

  const length = projectData.length;

  const nextSlide = () => {
    const lastImage = current === length - 1;
    setCurrent( lastImage ? 0 : current + 1);
  };

  const prevSlide = () => {
    const firstImage = current === 0;
    setCurrent(firstImage ? length - 1 : current - 1);
  }

  const generateId = (index) => {
    return index + ((Math.random() * 100) + 1);
  }

  return (
  <section className="portfolio section" id="portfolio">
    <h2 className="section__title">Portfolio (Front-end & Back-end)</h2>
    <span className="section__subtitle">Meus projetos</span>

    <div className="portfolio__container container">

      <div className="slider">
        <AiOutlineLeft className="button__icon left-arrow" onClick={ prevSlide } />

          { projectData.map((project, index) => {
            const { image, title, content, repository, techImgs } = project;
            return (
              <div className={ index === current ? 'slide active' : 'slide' } key={ index } >
                {
                  index === current && 
                  (
                  <div className="portfolio__data">
                    <img src={ image } className="portfolio__img" />
                    <div className="portfolio__info">

                      <h3 className="portfolio__title">{ title }</h3>
                      <p className="portfolio__description">{ content }</p>

                      <div key={generateId(index)} className="portfolio_tecnologies">
                        {techImgs}
                      </div>

                      <a href={ repository } target="_blank" className="button button--flex button--smal portfolio__button">
                        <FaFileAlt id="icon__repository" /> Repositório
                      </a>

                    </div>
                  </div>)

                }
              </div>
            );
          }) }

        <AiOutlineRight className="button__icon right-arrow" onClick={ nextSlide } />


      </div>  
    </div>
  </section>
  );
}

export default Projects;