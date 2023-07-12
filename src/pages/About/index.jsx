import { Me } from '../../assets';
import { AboutBox, AboutSkills } from '../../components';
import data from '../../data';
import './about.css';

function About() {
  const { skills, boxes } = data.about;

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Sobre mim</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Bolby Doe, web developer from London, United Kingdom. I have
              rich experience in web site design and building and customization,
              also I am good at WordPress.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            {skills.map(({ id, name, number, newClass }) => (
              <AboutSkills
                id={id}
                name={name}
                number={number}
                newClass={newClass}
                key={`skills-${id}`}
              />
            ))}
          </div>
        </div>
      </div>

      <AboutBox data={boxes} />
    </section>
  );
}

export default About;
