import data from '../../data.json';
import Icon from '../Icon';
import './headerSocials.css';

function HeaderSocials() {
  return (
    <div className="home__socials">
      {data.socialMedia.map(({ url, title, icon }) => (
        <a
          href={url}
          className="home__social-link"
          target="_blank"
          title={title.toUpperCase()}
          key={`nav-${title}`}
          rel="noreferrer">
          <Icon icon={icon} type="fa6" />
        </a>
      ))}
    </div>
  );
}

export default HeaderSocials;
