// deps
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
// components
import Icon from '../../../Icon';
// sevices
import db from '../../../../services/firebase';
import { getSocial } from '../../../../services/queries';

HeaderSocials.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export const HomeSocials = styled.div`
  display: flex;
  column-gap: 1.75rem;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`;

const HomeSocialLink = styled.a`
  color: var(--title-color);
  font-size: 1.3rem;
  transition: 0.3s;

  &:hover {
    color: #ffd15c;
  }
`;

function HeaderSocials() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    async function getSocialData() {
      setSocial((await getSocial(db)) || []);
    }

    getSocialData();
  }, []);

  return (
    <HomeSocials>
      {social.length > 0 &&
        social.map(
          ({ url, title, icon, active, typeIcon }) =>
            active && (
              <HomeSocialLink
                href={url}
                target="_blank"
                title={title.toUpperCase()}
                key={`nav-${title}`}
                rel="noreferrer">
                <Icon img={icon} typeIcon={typeIcon} />
              </HomeSocialLink>
            )
        )}
    </HomeSocials>
  );
}

export default HeaderSocials;
