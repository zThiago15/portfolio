import { AiFillPhone, AiOutlineSend, AiOutlineMail } from 'react-icons/ai'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contato</h2>
      <span className="section__subtitle">Mande mensagem</span>


      <div className="contact__container container grid">
      <div>
          <div className="contact__information">
            <AiFillPhone className="contact__icon" />
            <div>
              <h3 className="contact__subtitle">Telefone</h3>
              <span>(11) 97739-4478</span>
            </div>
          </div>

          <div className="contact__information">
              <AiOutlineMail className="contact__icon" />
              <div>
                <h3 className="contact__subtitle">E-mail</h3>
                <span>thiaguinhodias.15@gmail.com</span>
              </div>
          </div>
        </div>

        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">

            <div className="contact__content">
              <label for="" className="contact__label">Nome</label>
              <input type="text" className="contact__input" />
            </div>

            <div className="contact__content">
              <label for="" className="contact__label">E-mail</label>
              <input type="email" className="contact__input" />
            </div>
          </div>

          <div className="contact__content">
              <label for="" className="contact__label">Mensagem</label>
              <textarea cols="0" rows="7" className="contact__input" ></textarea>
            </div>

            <div>
              <a href="#" className="button button--flex">Enviar <AiOutlineSend className="button__icon" /></a>
            </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;