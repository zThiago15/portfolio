import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Thiago</h1>
            <span className="footer__subtitle">Desenvolvedor Fullstack</span>
          </div>

          <ol className="footer__links">
            <li>
              <a href="#portfolio" className="footer__link">Projetos</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contato</a>
            </li>
          </ol>

          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/thiago-dias-dev" className="footer__social" target="_blank"><AiFillLinkedin /></a>
          </div>
        </div>

        <p className="footer__copy">&#169; Bedimcode. Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;