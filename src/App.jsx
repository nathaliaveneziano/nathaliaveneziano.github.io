import { useEffect, useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';
import { Sidebar, ThemeCustomizer } from './components';
import {
  Home,
  About,
  Services,
  Resume,
  Portfolio,
  Projects,
  Testimonials,
  Blog,
  Contact,
} from './pages';
import DataContext from './services/DataContext';
import db from './services/firebase';
import {
  getBlog,
  // getEducation,
  // getExperience,
  getPortfolio,
  getProjects,
  getServices,
  getSidebar,
  getSkills,
  getSocial,
  getTestimonials,
} from './services/queries';
import { GlobalStyle, themes } from './globalStyles';

const Main = styled.main`
  margin-left: 110px;

  @media screen and (max-width: 767px) {
    margin-left: 5rem;
  }
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [customizer, setCustomizer] = useState(false);
  const [data, setData] = useState({});
  const [size, setSize] = useState('medium');
  const [color, setColor] = useState('red');
  const [theme, setTheme] = useState('dim');

  useEffect(() => {
    async function getData() {
      setData({
        ...data,
        about: {
          skills: (await getSkills(db)) || [],
        },
        blog: (await getBlog(db)) || [],
        portfolio: (await getPortfolio(db)) || [],
        projects: (await getProjects(db)) || [],
        resume: {
          // education: (await getEducation(db)) || [],
          // experience: (await getExperience(db)) || [],
        },
        testimonials: (await getTestimonials(db)) || [],
        services: (await getServices(db)) || [],
        sidebar: (await getSidebar(db)) || [],
        social: (await getSocial(db)) || [],
      });

      setLoading(true);
    }

    getData();
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
      {loading && (
        <DataContext.Provider value={data}>
          <Sidebar callback={handleThemeCustomizer} />
          <Main className="main">
            <Home />
            <About />
            {data.services.length > 0 && <Services />}
            <Resume />
            {data.portfolio.length > 0 && <Portfolio />}
            {data.projects.length > 0 && <Projects />}
            {data.testimonials.length > 0 && <Testimonials />}
            {data.blog.length > 0 && <Blog />}
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
        </DataContext.Provider>
      )}
      {customizer ? (
        <ThemeCustomizer
          theme={theme}
          setTheme={setTheme}
          color={color}
          setColor={setColor}
          size={size}
          setSize={setSize}
        />
      ) : null}
    </ThemeProvider>
  );
}

export default App;
