import { useState } from 'react';
import { AiOutlineHome, AiOutlineFileText, AiOutlineUser, AiFillBook, AiFillFileImage, AiOutlineDoubleRight, AiOutlineAppstore, AiOutlineClose } from 'react-icons/ai'

function Header(){
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Thiago</a>
        <div className={`nav__menu ${showMenu && 'show-menu'}`} id="nav-menu">
          <ol className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <AiOutlineHome className="nav__icon" onClick={ () => setShowMenu(!showMenu) } />Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <AiOutlineUser className="nav__icon" onClick={ () => setShowMenu(!showMenu) } /> Sobre mim
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <AiOutlineFileText className="nav__icon" onClick={ () => setShowMenu(!showMenu) } />Habilidades
              </a>
            </li>
            <li className="nav__item">
              <a href="#education" className="nav__link">
                <AiFillBook className="nav__icon" onClick={ () => setShowMenu(!showMenu) } /> Formação
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <AiFillFileImage className="nav__icon" onClick={ () => setShowMenu(!showMenu) } /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <AiOutlineDoubleRight className="nav__icon" onClick={ () => setShowMenu(!showMenu) } /> Redes sociais
              </a>
            </li>
          </ol>
          <AiOutlineClose className="nav__close" onClick={ () => setShowMenu(!showMenu) } id="nav-close" />
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle" onClick={ () => setShowMenu(!showMenu) }>
            <AiOutlineAppstore />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;