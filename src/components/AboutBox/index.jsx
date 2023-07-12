import { Icon } from '../index';

function AboutBox({ data }) {
  return (
    <div className="about__boxes grid">
      {data.map(({ id, icon, title, subtitle }) => (
        <div className="about__box" key={`about-${id}`}>
          <Icon icon={icon} typeIcon="sl" classes="about__icon" />

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
