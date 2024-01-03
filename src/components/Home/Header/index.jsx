// deps
import { styled } from 'styled-components';
// components
import HeaderScrollDown from './HeaderScrollDown';
import HeaderShapes from './HeaderShapes';
import HeaderSocials from './HeaderSocials';
// assets
import Me from '../../../assets/img/avatar.png';
// styles
import { Button, container } from '../../../globalStyles';

const HeaderComponent = styled.section`
  ${container}
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Intro = styled.div`
  max-width: 540px;
  text-align: center;
`;

const HeaderImg = styled.img`
  margin-bottom: 1.5rem;
  -webkit-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
`;

const HeaderName = styled.h1`
  font-size: var(--h1-font-size);
  font-weight: var(--font-bold);
  margin-bottom: 0.5rem;
`;

function Header() {
  return (
    <>
      <HeaderShapes />
      <HeaderComponent id="Header">
        <Intro>
          <HeaderImg src={Me} alt="" />
          <HeaderName>Nathália Veneziano</HeaderName>
          <span className="Header__education">Desenvolvedora Front-end</span>

          <HeaderSocials />

          <Button href="#contact" className="btn">
            Entre em contato
          </Button>

          <HeaderScrollDown />
        </Intro>
      </HeaderComponent>
    </>
  );
}

export default Header;
