import * as iconsSL from 'react-icons/sl';
import * as iconFA6 from 'react-icons/fa6';

function Icon({ icon, type }) {
  let IconComponent = '';

  if (type === 'sl') {
    IconComponent = iconsSL[icon];
  } else if (type === 'fa6') {
    IconComponent = iconFA6[icon];
  }

  return <IconComponent />;
}

export default Icon;
