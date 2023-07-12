import { Icon } from '../index';

function HeaderSocials({ data }) {
  return (
    <div className="home__socials">
      {data.map(({ url, title, icon }) => (
        <a
          href={url}
          className="home__social-link"
          target="_blank"
          title={title.toUpperCase()}
          key={`nav-${title}`}
          rel="noreferrer">
          <Icon icon={icon} typeIcon="fa6" />
        </a>
      ))}
    </div>
  );
}

export default HeaderSocials;
