import { Icon } from '../index';
import './card.css';

function Card({ icon, year, title, desc }) {
  return (
    <div className="card__item">
      <Icon icon={icon.icon} type={icon.type} />
      <span className="card__date">{year}</span>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{desc}</p>
    </div>
  );
}

export default Card;
