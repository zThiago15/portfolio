import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { projectData } from '../data/projectData';

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

  return (
  <section className="portfolio section" id="portfolio">
    <h2 className="section__title">Portfolio</h2>
    <span className="section__subtitle">Meus projetos</span>


      <div className="slider">
        <FaArrowAltCircleLeft className="button__icon left-arrow" onClick={ prevSlide } />
        <FaArrowAltCircleRight className="button__icon right-arrow" onClick={ nextSlide } />
          { projectData.map(({ image }, index) => {
            return (
              <div className={ index === current ? 'slide active' : 'slide' } key={ index } >
                {
                  index === current && (<img src={ image } className="portfolio__img" />)
                }
              </div>
            );
          }) }

            {/* <h3 className="portfolio__title">fdsfd</h3>
            <p className="portfolio__description">dfsfd</p>
            <a href="#" className="button button--flex button--smal portfolio__button">

            </a> */}
      </div>  

  </section>
  );
}

export default Projects;