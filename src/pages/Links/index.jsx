// deps
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// components
import Logo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import BlocksGrid from '../../components/BlocksGrid';
import ThemeCustomizer from '../../components/ThemeCustomizer';
// sevices
import db from '../../services/firebase';
import { getBlog, getSocial } from '../../services/queries';
// assets
import Me from '../../assets/img/avatar.png';
// styles
import {
  GlobalStyle,
  SectionTitle,
  container,
  themes,
} from '../../globalStyles';

const Main = styled.main`
  height: 100vh;
  margin-left: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    margin-left: 5rem;
  }
`;

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--body-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  & .nav__logo {
    width: 25vw;
    height: auto;
  }
`;

const HeaderLink = styled.header`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const HeaderImg = styled.img`
  width: 10rem;
  -webkit-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
`;

const LinksContainer = styled.section`
  ${container}
`;

function Links() {
  const [loading, setLoading] = useState(true);
  const [customizer, setCustomizer] = useState(false);
  const [social, setSocial] = useState([]);
  const [size, setSize] = useState('medium');
  const [color, setColor] = useState('red');
  const [theme, setTheme] = useState('dim');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getSocialData() {
      setSocial(await getSocial(db));
      setItems((await getBlog(db)) || []);
      setLoading(false);
    }

    getSocialData();
  }, []);

  // eslint-disable-next-line no-unused-vars
  function handleRecaptcha() {
    document.getElementById('demo-form').submit();
  }

  function handleThemeCustomizer(event) {
    event.preventDefault();

    setCustomizer(!customizer);
  }

  return (
    <ThemeProvider
      theme={{
        theme: themes.themeColors[theme],
        color: themes.colors[color],
        size: themes.sizes[size],
      }}>
      <GlobalStyle />
      {loading ? (
        <Loading>
          <div className="nav__logo">
            <Logo />
          </div>
          <SectionTitle>Carregando...</SectionTitle>
        </Loading>
      ) : (
        <>
          <Sidebar data={social} callback={handleThemeCustomizer} />
          <Main className="main">
            <LinksContainer id="links">
              <HeaderLink>
                <HeaderImg src={Me} alt="" />
                <div>
                  <h1>Nathália Veneziano</h1>
                  <span>Desenvolvedora Front-end</span>
                </div>
              </HeaderLink>
              <SectionTitle>Links</SectionTitle>
              <BlocksGrid data={items} page="links" />
            </LinksContainer>
            <form id="demo-form" action="?" method="POST">
              <input
                type="submit"
                className="g-recaptcha"
                data-sitekey={import.meta.env.VITE_SITEKEY}
                data-callback="handleRecaptcha"
                value="Submit"
              />
            </form>
          </Main>
          {customizer ? (
            <ThemeCustomizer
              theme={theme}
              setTheme={setTheme}
              color={color}
              setColor={setColor}
              size={size}
              setSize={setSize}
              setCustomizer={setCustomizer}
            />
          ) : null}
        </>
      )}
    </ThemeProvider>
  );
}

export default Links;
