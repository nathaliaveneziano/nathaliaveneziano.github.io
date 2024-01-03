// deps
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
// components
import Icon from '../Icon';
// services
import db from '../../services/firebase';
import { getSkills } from '../../services/queries';

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

const FilterButton = styled.button`
  cursor: pointer;
  display: flex;
  border: none;
  background-color: transparent;
  color: var(--text-color);

  &:hover {
    color: var(--first-color);
  }
`;

FilterArea.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  callback: PropTypes.func,
};

function FilterArea({ filters, callback }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function getSkillsData() {
      setSkills((await getSkills(db)) || []);
    }

    getSkillsData();
  }, []);

  function showIconOrText(item, index) {
    const findIcon = skills.find((skill) => skill.slug === item);

    if (!findIcon) {
      return (
        <FilterItem
          className="filter__item"
          key={`filter-${index}`}
          onClick={() => callback(item)}>
          {item}
        </FilterItem>
      );
    } else {
      return (
        <FilterButton
          key={`filter-${index}`}
          className="filter__icon"
          onClick={() => callback(item)}>
          <Icon key={index} img={findIcon.icon} typeIcon="si" />
        </FilterButton>
      );
    }
  }

  return (
    <FilterContainer>
      {filters.map((filter, index) => showIconOrText(filter, index))}
    </FilterContainer>
  );
}

export default FilterArea;
