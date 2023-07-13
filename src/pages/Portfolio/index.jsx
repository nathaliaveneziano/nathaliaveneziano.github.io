import { useState } from 'react';
import { RepoFilter, BlocksGrid } from '../../components';
import data from '../../data';
import './portfolio.css';

function Portfolio() {
  const [items, setItems] = useState(data.portfolio);
  const filters = [
    'Todos',
    ...new Set(data.portfolio.map((filter) => filter.category)),
  ];

  const filterItem = (filterItem) => {
    const updatedItems = data.portfolio.filter((elem) => {
      if (filterItem === 'Todos') {
        return elem;
      }
      return elem.category === filterItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Portfólio</h2>

      <RepoFilter filters={filters} callback={filterItem} />
      <BlocksGrid data={items} />
    </section>
  );
}

export default Portfolio;
