import { SlBadge, SlCup, SlFire, SlPeople } from 'react-icons/sl';
import './aboutBox.css';

function AboutBox() {
  const infos = [
    {
      icon: <SlFire className="about__icon" />,
      title: '198',
      subtitle: 'Project completed',
    },
    {
      icon: <SlCup className="about__icon" />,
      title: '5670',
      subtitle: 'Cup of coffee',
    },
    {
      icon: <SlPeople className="about__icon" />,
      title: '427',
      subtitle: 'Satisfied clients',
    },
    {
      icon: <SlBadge className="about__icon" />,
      title: '35',
      subtitle: 'Nomiees winner',
    },
  ];
  return (
    <div className="about__boxes grid">
      {infos.map((info, index) => (
        <div className="about__box" key={`about-${index}`}>
          {info.icon}

          <div>
            <h3 className="about__title">{info.title}</h3>
            <span className="about__subtitle">{info.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutBox;
