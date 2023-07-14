import { Icon } from '../../components';
import data from '../../data';
import './contact.css';

function Contact() {
  const { socialMedia } = data;

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contatos</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everthing!</h3>
          <p className="contact_details">Don't like forms? Send me an email.</p>
          <div className="contact__social-group">
            {socialMedia.map(({ id, url, title, icon }) => (
              <a href={url} className="contact__social" title={title} key={id}>
                <Icon icon={icon} typeIcon="fa6" />
                {title}
              </a>
            ))}
          </div>
        </div>

        <form className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Digite seu e-mail"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Digite um assunto"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Escreva sua mensagem"></textarea>
          </div>
          <button type="submit" className="btn">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
