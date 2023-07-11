import { Icon } from '../index';
import data from '../../data.json';
import './aboutBox.css';

function AboutBox() {
  return (
    <div className="about__boxes grid">
      {data.about.map(({ icon, title, subtitle }, index) => (
        <div className="about__box" key={`about-${index}`}>
          <Icon icon={icon} type="sl" classes="about__icon" />

          <div>
            <h3 className="about__title">{title}</h3>
            <span className="about__subtitle">{subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutBox;
