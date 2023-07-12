import { Icon } from '../index';

function ResumeCard({ icon, year, title, desc }) {
  return (
    <div className="resume__card-item">
      <Icon icon={icon.icon} typeIcon={icon.type} />
      <span className="resume__card-date">{year}</span>
      <h3 className="resume__card-title">{title}</h3>
      <p className="resume__card-text">{desc}</p>
    </div>
  );
}

export default ResumeCard;
