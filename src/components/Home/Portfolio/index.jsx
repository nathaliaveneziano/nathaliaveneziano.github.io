// deps
import { useContext, useState } from 'react';
import { styled } from 'styled-components';
// components
import FilterArea from '../../FilterArea';
import BlocksGrid from '../../BlocksGrid';
// services
import DataContext from '../../../services/DataContext';
// styles
import { SectionTitle, container, section } from '../../../globalStyles';

const PortfolioContainer = styled.section`
  ${container}
  ${section}
`;

function Portfolio() {
  const { portfolio } = useContext(DataContext);
  const [items, setItems] = useState(portfolio);
  const filters = [
    'Todos',
    ...new Set(portfolio.map((filter) => filter.category)),
  ];

  const filterItem = (filterItem) => {
    const updatedItems = portfolio.filter((elem) => {
      if (filterItem === 'Todos') {
        return elem;
      }
      return elem.category === filterItem;
    });

    setItems(updatedItems);
  };

  return (
    <PortfolioContainer id="work">
      <SectionTitle>Portfólio</SectionTitle>

      <FilterArea filters={filters} callback={filterItem} />
      <BlocksGrid data={items} />
    </PortfolioContainer>
  );
}

export default Portfolio;
