import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.875rem;
  margin-bottom: 2.5rem;
`;

const FilterItem = styled.span`
  cursor: pointer;
  font-weight: var(--font-bold);

  &:hover {
    color: var(--first-color);
  }
`;

RepoFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  callback: PropTypes.func,
};

function RepoFilter({ filters, callback }) {
  return (
    <FilterContainer>
      {filters.map((filter, index) => (
        <FilterItem
          className="filter__item"
          key={`filter-${index}`}
          onClick={() => callback(filter)}>
          {filter}
        </FilterItem>
      ))}
    </FilterContainer>
  );
}

export default RepoFilter;
