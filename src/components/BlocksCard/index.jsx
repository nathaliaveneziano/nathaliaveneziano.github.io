import { Icon } from '../index';
import './blocksCard.css';

function BlocksCard({
  id,
  title,
  category,
  image,
  techs = [],
  date = '',
  author = '',
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

      <div className="card__wrapper">
        <span className="card__category">{category}</span>
        <h3 className="card__title">{title}</h3>

        <div className="card__content">
          {techs.length > 0 && (
            <div className="card__techs">
              {techs.map(({ tech, icon }, index) => (
                <span className="card__tech" key={index} title={tech}>
                  <Icon icon={icon} typeIcon="si" />
                </span>
              ))}
            </div>
          )}

          {date && author && (
            <div className="card__meta">
              <span>{date}</span>
              <span className="card__dot">
                <Icon icon="FaCircle" typeIcon="fa6" />
              </span>
              <span>{author}</span>
            </div>
          )}
        </div>

        <div className="card__btns">
          {url && (
            <a href="#" className="card__button">
              <Icon icon="SlLink" typeIcon="sl" />
            </a>
          )}

          {url_github && url_preview && (
            <>
              <a href={url_github} className="btn">
                Github
              </a>
              <a href={url_preview} className="btn">
                Preview
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlocksCard;
