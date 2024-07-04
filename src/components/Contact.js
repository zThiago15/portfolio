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
                <span>thiagodias.db15@gmail.com</span>
              </div>
          </div>
        </div>

        <form action="https://formsubmit.co/thiaguinhodias.15@gmail.com" method="POST" className="contact__form grid">
          <div className="contact__inputs grid">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000" />



            <div className="contact__content">
              <label for="" className="contact__label">Nome</label>
              <input type="text" name="_subject" className="contact__input" required />
            </div>

            <div className="contact__content">
              <label for="" className="contact__label">E-mail</label>
              <input type="email" name="email" className="contact__input" />
            </div>
          </div>

          <div className="contact__content">
              <label for="" className="contact__label">Mensagem</label>
              <textarea cols="0" rows="7" name="content" className="contact__input" required ></textarea>
            </div>

            <div>
              <button type="submit" className="button button--flex">Enviar <AiOutlineSend className="button__icon" /></button>
            </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;