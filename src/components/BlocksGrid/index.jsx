import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { BlocksCard } from '../index';
import { grid } from '../../globalStyles';

const BlocksContainer = styled.div`
  overflow-y: auto;
  position: relative;
  padding-right: 0.5rem;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #dedeea;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: var(--first-color);
  }

  @media screen and (max-width: 1199px) {
    max-height: 57vh;
  }

  @media screen and (max-width: 767px) {
    max-height: 38vh;
  }
`;

const BlocksContainerGrid = styled.div`
  ${grid}
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem;

  @media screen and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 12fr;
  }
`;

BlocksGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};

function BlocksGrid({ data, className }) {
  return (
    <BlocksContainer>
      <BlocksContainerGrid>
        {data.map(
          (
            {
              title,
              category,
              image,
              active = true,
              techs = [],
              date = '',
              author = '',
              url = '',
              url_github = '',
              url_preview = '',
            },
            id
          ) => (
            <BlocksCard
              id={id}
              title={title}
              category={category}
              image={image}
              active={active}
              techs={techs}
              date={date}
              author={author}
              url={url}
              url_github={url_github}
              url_preview={url_preview}
              className={className}
              key={id}
            />
          )
        )}
      </BlocksContainerGrid>
    </BlocksContainer>
  );
}

export default BlocksGrid;
