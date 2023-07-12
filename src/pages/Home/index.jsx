import { Me } from '../../assets';
import {
  HeaderSocials,
  HeaderScrollDown,
  HeaderShapes,
} from '../../components';
import data from '../../data';
import './home.css';

function Home() {
  const { socialMedia } = data;

  return (
    <>
      <HeaderShapes />
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">Nathália Veneziano</h1>
          <span className="home__education">Desenvolvedora Front-end</span>

          <HeaderSocials data={socialMedia} />

          <a href="#contact" className="btn">
            Entre em contato
          </a>

          <HeaderScrollDown />
        </div>
      </section>
    </>
  );
}

export default Home;
