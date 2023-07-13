import { useState } from 'react';
import { RepoFilter, BlocksGrid } from '../../components';
import data from '../../data';
import './projects.css';

function Projects() {
  const [items, setItems] = useState(data.projects);
  const filters = [
    'Todos',
    ...new Set(data.projects.map((filter) => filter.category)),
  ];

  const filterItem = (filterItem) => {
    const updatedItems = data.projects.filter((elem) => {
      if (filterItem === 'Todos') {
        return elem;
      }

      const tag = filterItem.toLowerCase().replace('-', '').replace(' ', '');
      return elem.category === tag;
    });

    setItems(updatedItems);
  };

  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">Projetos Recentes</h2>

      <RepoFilter filters={filters} callback={filterItem} />
      <BlocksGrid data={items} className='no-hover' />
    </section>
  );
}

export default Projects;
