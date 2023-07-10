import './home.css';
import Me from '../../assets/avatar.png';
import HeaderSocials from '../../components/HeaderSocials';
import ScrollDown from '../../components/ScrollDown';
import Shapes from '../../components/Shapes';

function Home() {
  return (
    <>
      <Shapes />
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">Nathália Veneziano</h1>
          <span className="home__education">Desenvolvedora Front-end</span>

          <HeaderSocials />

          <a href="#contact" className="btn">
            Entre em contato
          </a>

          <ScrollDown />
        </div>
      </section>
    </>
  );
}

export default Home;
