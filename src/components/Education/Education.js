import { MdSchool } from 'react-icons/md';
import { GoCalendar } from 'react-icons/go';
import './Education.css';

function Education() {
  return (
    <section id="education">
      <h2 className="section__title">Formação</h2>
      <span className="section__subtitle">Jornada pessoal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <MdSchool className="qualification__icon" /> Educação
          </div>
        </div>


          <div className="qualification__sections">
            <div className="qualification__content" data-content>
              <div className="qualification__data">
                <h3 className="qualification__title">Graduação - Ciência da Computação</h3>
                <span className="qualification__subtitle">Faculdade Descomplica</span>
                <div className="qualification__calendar">
                  <GoCalendar /> 2022 - 2026
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="qualification__title">Curso de Desenvolvimento Web</h3>
                <span className="qualification__subtitle">Trybe</span>
                <div className="qualification__calendar">
                  <GoCalendar /> 2022 - 2023
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="qualification__title">Bolsa Trabalho - Juventude, Trabalho e Fabricação Digital</h3>
                <span className="qualification__subtitle">Prefeitura de São Paulo</span>
                <div className="qualification__calendar">
                  <GoCalendar /> 2022
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="qualification__title">Desenvolvimento de Sistemas</h3>
                <span className="qualification__subtitle">ETEC Prof. Camargo Aranha</span>
                <div className="qualification__calendar">
                  <GoCalendar /> 2020 - 2021
                </div>
              </div>

            </div>
          </div>

      </div>
    </section>
  );
}

export default Education;