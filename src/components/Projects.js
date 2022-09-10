import { AiOutlineArrowRight } from 'react-icons/ai';
import Perfil from '../assets/imgs/perfil.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Projects() {
  return (
    <section className="portfolio section" id="portfolio">
    <h2 className="section__title">Portfolio</h2>
    <span className="section__subtitle">Meus projetos</span>
    <div className="portfolio__container container">

      <Carousel showArrows="true">
          <div className="portfolio__content grid">
            <img src={ Perfil } className="portfolio__img" />

            <div className="portfolio__data">
              <h3 className="portfolio__title">fdsfd</h3>
              <p className="portfolio__description">dfsfd</p>
              <a href="#" className="button button--flex button--smal portfolio__button">
                Demo   
                <AiOutlineArrowRight className="button__icon" />
              </a>
            </div>
          </div>  

          <div className="portfolio__content grid">
            <img src={ Perfil } className="portfolio__img" />

            <div className="portfolio__data">
              <h3 className="portfolio__title">fdsfd</h3>
              <p className="portfolio__description">dfsfd</p>
              <a href="#" className="button button--flex button--smal portfolio__button">
                Demo   
                <AiOutlineArrowRight className="button__icon" />
              </a>
            </div>
          </div> 
      </Carousel>

    </div>

  </section>
  );
}

export default Projects;