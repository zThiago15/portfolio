import { AiOutlineDownload } from 'react-icons/ai';
import Perfil from '../assets/imgs/perfil.png';
import CV from '../assets/cv/CV-Thiago-Dias-Barboza.pdf';

function AboutMe() {
  return (
  <section className="about section" id="about"> 
    <h2 className="section__title">Sobre mim</h2>
    <span className="section__subtitle">Introdução</span>

    <div className="about__container container grid">
      <img src={ Perfil } alt="Foto atual para o portfolio" className="about__img" />

      <div className="about__data"> 
          <p className="about__description">
            Olá mundo, sou o Thiago. Tenho 20 anos, nasci e moro na cidade de São Paulo - SP e
            técnico em Desenvolvimento de Sistemas. Comecei meu interesse pela tecnologia na infâcia, quando jogava
            PlayStation 2 com meus primos. Com frequência me questionava como era feito o jogo e como meu controle o afetava.
          </p>
          
          <p className="about__description">Comecei na programação em 2019, ao me deparar com os vídeos de Python do grande professor Gustavo Guanabara e me encantei pela forma de resolver os problemas usando algoritmo computacional, daí inicie o curso técnico de Desenvolvimento de Sistema onde aprendi o básico sobre o mundo da tecnologia. Agora, faço o curso da Trybe! Além de programação, ensinam sobre soft skills e preparam os estudantes para o mercado de trabalho.</p>

          <p className="about__description">Meu grande objetivo é tornar-me um desenvolvedor Fullstack e evoluir para minha carreira internacionalmente.</p>

        <div class="about__info">
          <span className="about__info-title">15+</span>
          <span className="about__info-name">Projetos feitos</span>
          <span className="about__buttons">
            <a download="" href={ CV } className="button button--flex">
              Download CV<AiOutlineDownload className="button__icon" />
            </a> 
          </span>
        </div>

      </div>

      
    </div>
  </section>
  );
}

export default AboutMe;