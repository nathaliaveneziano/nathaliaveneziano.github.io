import { Icon } from '../index';
import './repoCard.css';

function RepoCard({
  id,
  title,
  category,
  image,
  techs = [],
  url = '',
  url_github = '',
  url_preview = '',
}) {
  return (
    <div className="card__container" key={id}>
      <div className="card__thumbnail">
        <img src={image} alt="" className="card__img" />
        <div className="card__mask"></div>
      </div>

      <span className="card__category">{category}</span>
      {techs.length > 0 && (
        <div className="card__techs">
          {techs.map(({ tech, icon }, index) => (
            <span className="card__tech" key={index} title={tech}>
              <Icon icon={icon} typeIcon="si" />
            </span>
          ))}
        </div>
      )}
      <h3 className="card__title">{title}</h3>
      {url && (
        <a href="#" className="card__button">
          <Icon icon="SlLink" typeIcon="sl" />
        </a>
      )}

      {url_github && url_preview && (
        <div className="card__btns">
          <a href={url_github} className="btn">
            Github
          </a>
          <a href={url_preview} className="btn">
            Preview
          </a>
        </div>
      )}
    </div>
  );
}

export default RepoCard;
