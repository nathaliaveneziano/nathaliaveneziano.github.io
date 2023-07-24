import PropTypes from 'prop-types';
import * as iconFA6 from 'react-icons/fa6';
import * as iconSI from 'react-icons/si';
import * as iconsSL from 'react-icons/sl';

Icon.propTypes = {
  img: PropTypes.string,
  typeIcon: PropTypes.string,
  className: PropTypes.string,
};

function Icon({ img, typeIcon, className }) {
  let IconComponent = '';

  switch (typeIcon) {
    case 'fa6':
      IconComponent = iconFA6[img];
      break;
    case 'si':
      IconComponent = iconSI[img];
      break;
    case 'sl':
      IconComponent = iconsSL[img];
      break;

    default:
      break;
  }

  return <IconComponent className={className} />;
}

export default Icon;
