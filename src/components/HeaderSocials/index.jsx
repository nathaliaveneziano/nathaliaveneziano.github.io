import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { Icon } from '../index';

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

function HeaderSocials({ data }) {
  return (
    <HomeSocials>
      {data &&
        data.map(({ url, title, icon }) => (
          <HomeSocialLink
            href={url}
            target="_blank"
            title={title.toUpperCase()}
            key={`nav-${title}`}
            rel="noreferrer">
            <Icon img={icon} typeIcon="fa6" />
          </HomeSocialLink>
        ))}
    </HomeSocials>
  );
}

export default HeaderSocials;
