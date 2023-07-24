import { useContext } from 'react';
import { styled } from 'styled-components';
import { Me } from '../../assets';
import {
  HeaderScrollDown,
  HeaderShapes,
  HeaderSocials,
} from '../../components';
import { Button, container } from '../../globalStyles';
import DataContext from '../../services/DataContext';

const HomeComponent = styled.section`
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

const HomeImg = styled.img`
  margin-bottom: 1.5rem;
  -webkit-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
`;

const HomeName = styled.h1`
  font-size: var(--h1-font-size);
  font-weight: var(--font-bold);
  margin-bottom: 0.5rem;
`;

function Home() {
  const { social } = useContext(DataContext);

  return (
    <>
      <HeaderShapes />
      <HomeComponent id="home">
        <Intro>
          <HomeImg src={Me} alt="" />
          <HomeName>Nathália Veneziano</HomeName>
          <span className="home__education">Desenvolvedora Front-end</span>

          <HeaderSocials data={social} />

          <Button href="#contact" className="btn">
            Entre em contato
          </Button>

          <HeaderScrollDown />
        </Intro>
      </HomeComponent>
    </>
  );
}

export default Home;
