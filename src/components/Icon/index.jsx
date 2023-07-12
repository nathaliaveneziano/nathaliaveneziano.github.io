import * as iconFA6 from 'react-icons/fa6';
import * as iconSI from 'react-icons/si';
import * as iconsSL from 'react-icons/sl';

function Icon({ icon, typeIcon }) {
  let IconComponent = '';

  switch (typeIcon) {
    case 'fa6':
      IconComponent = iconFA6[icon];
      break;
    case 'si':
      IconComponent = iconSI[icon];
      break;
    case 'sl':
      IconComponent = iconsSL[icon];
      break;

    default:
      break;
  }

  return <IconComponent />;
}

export default Icon;
