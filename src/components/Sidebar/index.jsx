// deps
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
// components
import Logo from '../Logo';
import Icon from '../Icon';

const Aside = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  background: var(--body-color);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  width: 110px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  @media screen and (max-width: 767px) {
    width: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const NavLink = styled.a`
  font-size: 1.5rem;
  color: var(--title-color);
  font-weight: var(--font-bold);
  transition: 0.3s;

  &:hover {
    color: hsl(43, 100%, 68%);
  }
`;

const Copyright = styled.span`
  color: hsl(245, 15%, 65%);
  font-size: var(--small-font-size);
  transform: rotate(-180deg);
  writing-mode: vertical-rl;
`;

Sidebar.propTypes = {
  data: PropTypes.array,
  callback: PropTypes.func,
};

function Sidebar({ data, callback }) {
  let menu = [];

  menu = data.filter(({ active, title }) => active && title);

  if (menu.length > 0) {
    menu.push({
      id: 8,
      title: 'config',
      icon: 'SlEqualizer',
      url: '',
      callback: callback,
    });
  }

  return (
    <Aside>
      <a href="#home" className="nav__logo">
        <Logo />
      </a>

      <nav>
        <NavList>
          {menu &&
            menu.map(({ id, url, title, icon, callback }) => (
              <li className={`menu__${title}`} key={id}>
                <NavLink
                  href={url}
                  title={title.toUpperCase()}
                  onClick={callback}>
                  <Icon img={icon} typeIcon="sl" />
                </NavLink>
              </li>
            ))}
        </NavList>
      </nav>

      <Copyright>&copy; 2023</Copyright>
    </Aside>
  );
}

export default Sidebar;
