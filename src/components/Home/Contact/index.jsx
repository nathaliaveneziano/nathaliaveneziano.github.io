// deps
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
// components
import Icon from '../../Icon';
// services
import db from '../../../services/firebase';
import { getSocial } from '../../../services/queries';
// styles
import {
  button,
  FormDiv,
  FormInput,
  SectionTitle,
  container,
  grid,
  input,
  section,
} from '../../../globalStyles';

const ContactContainer = styled.section`
  ${container}
  ${section}
  padding-bottom: 6.25rem;
`;

const ContactWrapper = styled.div`
  ${grid}
  grid-template-columns: 4fr 8fr;
  gap: 1.875rem;

  @media screen and (max-width: 767px) {
    grid-template-columns: 12fr;
  }
`;

const ContactTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: 0.5rem;
`;

const ContactSocialGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

const ContactSocial = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-items: center;
  color: var(--text-color);
  font-weight: var(--font-bold);
  transition: 0.3s;

  &:hover {
    color: var(--first-color);
  }
`;

// const ContactFormGroup = styled.div`
//   ${grid}
//   grid-template-columns: repeat(2, 1fr);
//   column-gap: 1.5rem;

//   @media screen and (max-width: 767px) {
//     grid-template-columns: 12fr;
//   }
// `;

const ContactFormArea = styled(FormDiv)`
  height: 10.25rem;
`;

const ContactFormTextarea = styled.textarea`
  ${input}
  resize: none;
  padding: 1.625rem 1.875rem;
`;

const ContactButton = styled.button`
  ${button};
`;

function Contact() {
  const [social, setSocial] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function getSocialData() {
      setSocial((await getSocial(db)) || []);
    }

    getSocialData();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      toast.warn('Preencha todos os campos!', {
        position: 'bottom-right',
      });
      return;
    }

    const templateParams = {
      from_name: name,
      email,
      message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          toast.success('Email enviado com sucesso! 😍', {
            position: 'bottom-right',
          });

          setName('');
          setEmail('');
          setMessage('');
        },
        (err) => {
          toast.error('Algo deu errado. Por favor, tente mais tarde!');
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <SectionTitle>Contatos</SectionTitle>

      <ContactWrapper>
        <div className="contact__info">
          <ContactTitle>Vamos conversar sobre tudo!</ContactTitle>
          <p className="contact_details">
            Mande-me um e-mail ou me siga nas redes sociais.
          </p>
          <ContactSocialGroup>
            {social.map(({ url, title, icon }, id) => (
              <ContactSocial href={url} title={title} key={id}>
                <Icon img={icon} typeIcon="fa6" />
                {title}
              </ContactSocial>
            ))}
          </ContactSocialGroup>
        </div>

        <form className="contact__form" onSubmit={sendEmail}>
          <FormDiv>
            <FormInput
              required
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormDiv>
          <FormDiv>
            <FormInput
              required
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormDiv>
          <ContactFormArea>
            <ContactFormTextarea
              required
              cols="30"
              rows="10"
              placeholder="Escreva sua mensagem"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }></ContactFormTextarea>
          </ContactFormArea>
          <ContactButton type="submit">Enviar Mensagem</ContactButton>
        </form>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
