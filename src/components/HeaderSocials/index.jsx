import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';
import './headerSocials.css';

function HeaderSocials() {
  const links = [
    {
      url: 'https://www.instagram.com/nathalia.veneziano.developer/',
      title: 'instagram',
      icon: <FaInstagram />,
    },
    {
      url: 'https://twitter.com/nath_veneziano',
      title: 'twitter',
      icon: <FaTwitter />,
    },
    {
      url: 'https://www.facebook.com/nathalia.veneziano.developer',
      title: 'facebook',
      icon: <FaFacebookF />,
    },
  ];

  return (
    <div className="home__socials">
      {links.map((link) => (
        <a
          href={link.url}
          className="home__social-link"
          target="_blank"
          title={link.title.toUpperCase()}
          key={`nav-${link.title}`}
          rel="noreferrer">
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default HeaderSocials;
