// deps
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaRegCircleXmark } from 'react-icons/fa6';
// styles
import './themeCustomizer.css';

ThemeCustomizer.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
  color: PropTypes.string,
  setColor: PropTypes.func,
  size: PropTypes.string,
  setSize: PropTypes.func,
  setCustomizer: PropTypes.func,
};

const IconFaX = styled(FaRegCircleXmark)`
  position: absolute;
  top: -2.5rem;
  right: 0;
  font-size: var(--h1-font-size);
  color: var(--title-color);
  cursor: pointer;
`;

function ThemeCustomizer({
  theme,
  setTheme,
  color,
  setColor,
  size,
  setSize,
  setCustomizer,
}) {
  const configTheme = {
    backgrounds: [
      {
        text: 'Light',
        slug: 'light',
      },
      {
        text: 'Dim',
        slug: 'dim',
      },
      {
        text: 'Dark',
        slug: 'dark',
      },
    ],
    colors: [
      {
        text: '',
        slug: 'purple',
      },
      {
        text: '',
        slug: 'yellow',
      },
      {
        text: '',
        slug: 'red',
      },
      {
        text: '',
        slug: 'green',
      },
      {
        text: '',
        slug: 'blue',
      },
    ],
    sizes: [
      {
        slug: 'xsmall',
      },
      {
        slug: 'small',
      },
      {
        slug: 'medium',
      },
      {
        slug: 'large',
      },
    ],
  };

  function removeClass(array) {
    const list = array.parentNode.children;
    for (let element of list) {
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      }
    }
  }

  function handleChange(event, callback, slug, element) {
    event.preventDefault();

    if (slug !== element) {
      removeClass(event.target);
      const text = event.target.className;
      callback(text);
    }
  }

  function createElement(type, element, callback, Tag) {
    return (
      <>
        {configTheme[type].map(({ slug, text }, index) => (
          <Tag
            className={`${slug}${slug === element ? ' active' : ''}`}
            key={index}
            onClick={(event) => handleChange(event, callback, slug, element)}>
            {text}
          </Tag>
        ))}
      </>
    );
  }

  return (
    <div className="customize">
      <div className="customize__card">
        <IconFaX onClick={() => setCustomizer(false)} />
        <h2>Customize o site</h2>
        <p>Altere o tamanho da fonte, cor e fundo</p>
        {/* <!-- font size --> */}
        <div className="customize__font-size">
          <h3>Font Size</h3>
          <div>
            <h6>Aa</h6>
            <div className="customize__choose-size">
              {createElement('sizes', size, setSize, 'span')}
            </div>
            <h3>Aa</h3>
          </div>
        </div>
        {/* <!-- color --> */}
        <div className="customize__color">
          <h3>Color</h3>
          <div className="customize__choose-color">
            {createElement('colors', color, setColor, 'span')}
          </div>
        </div>
        {/* <!-- background --> */}
        <div className="customize__theme">
          <h3>Tema</h3>
          <div className="customize__choose-theme">
            {createElement('backgrounds', theme, setTheme, 'h5')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeCustomizer;
