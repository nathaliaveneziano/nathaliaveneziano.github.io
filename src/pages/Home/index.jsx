// deps
import { useEffect, useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';
// pages
import Header from '../../components/Home/Header';
import About from '../../components/Home/About';
import Projects from '../../components/Home/Projects';
import Blog from '../../components/Home/Blog';
import Contact from '../../components/Home/Contact';
// components
import Logo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import ThemeCustomizer from '../../components/ThemeCustomizer';
// sevices
import db from '../../services/firebase';
import { getSidebar } from '../../services/queries';
// styles
import { GlobalStyle, SectionTitle, themes } from '../../globalStyles';
import ScrollToAnchor from '../../components/Home/ScrollToAnchor';

const Main = styled.main`
  margin-left: 110px;

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

function Home() {
  const [loading, setLoading] = useState(true);
  const [customizer, setCustomizer] = useState(false);
  const [sidebar, setSidebar] = useState([]);
  const [size, setSize] = useState('medium');
  const [color, setColor] = useState('red');
  const [theme, setTheme] = useState('dim');

  useEffect(() => {
    async function getSidebarData() {
      setSidebar(await getSidebar(db));
      setLoading(false);
    }

    getSidebarData();
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
        <div id="home">
          <ScrollToAnchor />
          <Sidebar data={sidebar} callback={handleThemeCustomizer} />
          <Main className="main">
            <Header />
            <About />
            <Projects />
            <Blog />
            <Contact />
          </Main>
          <form id="demo-form" action="?" method="POST">
            <input
              type="submit"
              className="g-recaptcha"
              data-sitekey={import.meta.env.VITE_SITEKEY}
              data-callback="handleRecaptcha"
              value="Submit"
            />
            <br />
          </form>
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
        </div>
      )}
    </ThemeProvider>
  );
}

export default Home;
