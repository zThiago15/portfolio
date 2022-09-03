import { AiOutlineDownload } from 'react-icons/ai';
import Perfil from '../assets/imgs/perfil.png';

function AboutMe() {
  return (
  <section className="about section" id="about"> 
    <h2 className="section__title">Sobre mim</h2>
    <span className="section__subtitle">Introdução</span>

    <div className="about__container container grid">
      <img src={ Perfil } alt="Foto atual para o portfolio" className="about__img" />

      <div className="about__data"> 
        <p className="about__description">
          Olá, tenho 20 anos, sou <em class="nationality">brasileiro</em>, nasci e moro na cidade de <em class="nationality">São Paulo</em>. Sou técnico em <strong>Desenvolvimento de Sistemas</strong>, <br />sempre tive uma paixão por programação e atualmente faço o curso da Trybe!

          Olá, meu nome é <strong>Thiago Dias Barboza</strong>, tenho 20 anos, nasci e moro na cidade de São Paulo. Sou técnico em <em>Desenvolvimento de Sistemas</em> e descobri minha paixão por programação ao finalizar o Ensino médio. Me deparei com os vídeos de Python do professor Gustavo Guanabara e me encantei pela forma de resolver os problemas usando algoritmo computacional, daí inicie o curso técnico de Desenvolvimento de Sistema onde aprendi o básico sobre o mundo da tecnologia. Agora, faço o curso da Trybe! Além de programação, ensinam sobre soft skills e preparam os estudantes para o mercado de trabalho.
        </p>
        <div class="about__info">
          <div>
            <span className="about__info-title">15+</span>
            <span className="about__info-name">Completed projects</span>
          </div>
        </div>

        <div className="about__buttons">
          <a download="" href="assets/" className="button button--flex">
            Download CV<AiOutlineDownload className="button__icon" />
          </a> 
        </div>
      </div>

      
    </div>
  </section>
  );
}

export default AboutMe;