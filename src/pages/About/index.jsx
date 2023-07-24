import { styled } from 'styled-components';
import { Me } from '../../assets';
import PDF from '../../assets/file/curriculo.pdf';
import { AboutBox, AboutSkills } from '../../components';
import {
  Button,
  SectionTitle,
  container,
  grid,
  section,
} from '../../globalStyles';

const AboutComponent = styled.section`
  ${container}
  ${section}
`;

const AboutContainer = styled.div`
  ${grid}
  grid-template-columns: 3fr 9fr;
  gap: 1.875rem;

  @media screen and (max-width: 767px) {
    grid-template-columns: 12fr;
  }
`;

const AboutImg = styled.img`
  -webkit-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));

  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`;

const AboutData = styled.div`
  ${grid}
  padding: 1.8rem;
  background-color: var(--container-color);
  box-shadow: var(--shadow);
  border-radius: var(--border-radius);
  grid-template-columns: repeat(2, 1fr);
  gap: 1.875rem;
  align-items: flex-start;
  position: relative;

  @media screen and (max-width: 767px) {
    grid-template-columns: 12fr;
    text-align: center;
  }

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 15px solid var(--container-color);
    position: absolute;
    left: -0.93rem;
    top: 20%;

    @media screen and (max-width: 767px) {
      transform: rotate(90deg);
      left: 50%;
      top: -18px;
      margin-left: -7.5px;
    }
  }
`;

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

const AboutDescription = styled.p`
  margin-bottom: 1rem;
  text-align: justify;
`;

const AboutButton = styled(Button)`
  text-align: center;
`;

function About() {
  return (
    <AboutComponent id="about">
      <SectionTitle>Sobre mim</SectionTitle>

      <AboutContainer>
        <AboutImg src={Me} alt="" className="about__img" />

        <AboutData>
          <AboutInfo>
            <AboutDescription>
              Desenvolvedora apaixonada pelo desenvolvimento Full Stack e sempre
              de olho nas tendências. Bacharela em Ciências da Computação e
              formada em Desenvolvimento Web. Atuei 3 anos como Web Designer, 1
              ano e meio como suporte.
            </AboutDescription>

            <AboutButton href={PDF} target="_blank" rel="noreferrer">
              Download CV
            </AboutButton>

            <AboutButton href="#contact">Entre em contato</AboutButton>
          </AboutInfo>

          <AboutSkills />
        </AboutData>
      </AboutContainer>
      <AboutBox />
    </AboutComponent>
  );
}

export default About;
