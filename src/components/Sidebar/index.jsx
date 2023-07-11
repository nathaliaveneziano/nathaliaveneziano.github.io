import {
  SlBriefcase,
  SlBubble,
  SlEqualizer,
  SlGraduation,
  SlHome,
  SlLayers,
  SlNote,
  SlUserFollowing,
} from 'react-icons/sl';
import { Logo } from '../index';
import './sidebar.css';

function Sidebar() {
  const data = [
    { url: '#home', title: 'home', icon: <SlHome /> },
    { url: '#about', title: 'about', icon: <SlUserFollowing /> },
    { url: '#services', title: 'services', icon: <SlBriefcase /> },
    { url: '#resume', title: 'resume', icon: <SlGraduation /> },
    { url: '#projects', title: 'projects', icon: <SlLayers /> },
    { url: '#blog', title: 'blog', icon: <SlNote /> },
    { url: '#contact', title: 'contact', icon: <SlBubble /> },
    { url: '/', title: 'Home', icon: <SlEqualizer /> },
  ];

  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <Logo />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            {data.map(({ url, title, icon }) => (
              <li className="nav__item" key={`nav-${title}`}>
                <a href={url} className="nav__link" title={title.toUpperCase()}>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023</span>
      </div>
    </aside>
  );
}

export default Sidebar;
