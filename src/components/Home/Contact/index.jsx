// deps
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
// components
import Icon from '../../Icon';
// services
import db from '../../../services/firebase';
import { getSocial } from '../../../services/queries';
// styles
import {
  Button,
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

const ContactFormGroup = styled.div`
  ${grid}
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.5rem;

  @media screen and (max-width: 767px) {
    grid-template-columns: 12fr;
  }
`;

const ContactFormArea = styled(FormDiv)`
  height: 10.25rem;
`;

const ContactFormTextarea = styled.textarea`
  ${input}
  resize: none;
  padding: 1.625rem 1.875rem;
`;

function Contact() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    async function getSocialData() {
      setSocial((await getSocial(db)) || []);
    }

    getSocialData();
  }, []);

  return (
    <ContactContainer id="contact">
      <SectionTitle>Contatos</SectionTitle>

      <ContactWrapper>
        <div className="contact__info">
          <ContactTitle>Let&apos;s talk about everthing!</ContactTitle>
          <p className="contact_details">
            Don&apos;t like forms? Send me an email.
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

        <form className="contact__form">
          <ContactFormGroup>
            <FormDiv>
              <FormInput type="text" placeholder="Digite seu nome" />
            </FormDiv>
            <FormDiv>
              <FormInput type="email" placeholder="Digite seu e-mail" />
            </FormDiv>
          </ContactFormGroup>
          <FormDiv>
            <FormInput type="text" placeholder="Digite um assunto" />
          </FormDiv>
          <ContactFormArea>
            <ContactFormTextarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Escreva sua mensagem"></ContactFormTextarea>
          </ContactFormArea>
          <Button type="submit">Enviar Mensagem</Button>
        </form>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
