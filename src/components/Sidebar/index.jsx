import { Logo, Icon } from '../index';
import data from '../../data.json';
import './sidebar.css';

function Sidebar() {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <Logo />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            {data.sidebar.map(({ url, title, icon }) => (
              <li className="nav__item" key={`nav-${title}`}>
                <a href={url} className="nav__link" title={title.toUpperCase()}>
                  <Icon icon={icon} type="sl" />
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
