import { useContext, useState } from 'react';
import { styled } from 'styled-components';
import { RepoFilter, BlocksGrid } from '../../components';
import { SectionTitle, container, section } from '../../globalStyles';
import DataContext from '../../services/DataContext';

const ProjectsContainer = styled.section`
  ${container}
  ${section}
`;

function Projects() {
  const { projects } = useContext(DataContext);
  const [items, setItems] = useState(projects);
  const filters = [
    'Todos',
    ...new Set(projects.map((filter) => filter.category)),
  ];

  const filterItem = (filterItem) => {
    const updatedItems = projects.filter((elem) => {
      if (filterItem === 'Todos') {
        return elem;
      }

      const tag = filterItem.toLowerCase().replace('-', '').replace(' ', '');
      return elem.category === tag;
    });

    setItems(updatedItems);
  };

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projetos Recentes</SectionTitle>

      <RepoFilter filters={filters} callback={filterItem} />
      <BlocksGrid data={items} className="no-hover" />
    </ProjectsContainer>
  );
}

export default Projects;
