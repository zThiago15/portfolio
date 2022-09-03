import { AiFillLinkedin, AiOutlineGithub, AiOutlineArrowDown, AiOutlineMail } from 'react-icons/ai';
import Perfil from '../assets/imgs/me.png';

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.linkedin.com/in/thiago-dias-dev" className="home__social-icon">
            <AiFillLinkedin />
            </a>
            <a href="https://github.com/zthiago15" className="home__social-icon">
              <AiOutlineGithub />
            </a>
          </div>
        </div>
 
        <div className="home__img">
          <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                </mask>
                
                <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  <image className="home__blob-img" x="20" xlinkHref={ Perfil } />
                </g>
            </svg>
        </div>

        <div className="home__data">
          <h1 className="home__title">Olá, meu nome é Thiago</h1>
          <h2 className="home__subtitle">Desenvolvedor Fullstack</h2>
          <p className="home__description">Experiência no desenvolvimento de aplicações com React.js e Node.js</p>  
          <a href="#contact" className="button button--flex">Entre em contato <AiOutlineMail className="button__icon" /></a>
        </div>
        
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <AiOutlineArrowDown className="home__scroll-arrow" />
            <span className="home__scroll-name">Role para baixo</span>
          </a>
        </div>
      </div>

    </section>
  );
}

export default Home;