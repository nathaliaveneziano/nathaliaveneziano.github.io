// deps
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
// components
import FilterArea from '../../FilterArea';
import BlocksGrid from '../../BlocksGrid';
// services
import db from '../../../services/firebase';
import { getProjects } from '../../../services/queries';
// styles
import { SectionTitle, container, section } from '../../../globalStyles';

const ProjectsContainer = styled.section`
  ${container}
  ${section}
`;

function Projects() {
  const [projects, setProjects] = useState([]);
  const [items, setItems] = useState(projects);

  useEffect(() => {
    async function getProjectsData() {
      setProjects((await getProjects(db)) || []);
      setItems((await getProjects(db)) || []);
    }

    getProjectsData();
  }, []);

  const filters = [
    ...new Set(
      projects
        .filter((item) => item.active)
        .reduce((acc, { techs }) => acc.concat(techs), ['Todos'])
        .filter((item) => item !== undefined)
    ),
  ];

  const filterItem = (filterItem) => {
    const updatedItems = projects.filter((elem) => {
      if (filterItem === 'Todos' && elem.active) {
        return elem;
      }

      if (elem.active && elem.techs) {
        return elem.techs.includes(filterItem);
      }
    });

    setItems(updatedItems);
  };

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projetos Recentes</SectionTitle>

      <FilterArea filters={filters} callback={filterItem} />
      <BlocksGrid data={items} page="projects" className="no-hover" />
    </ProjectsContainer>
  );
}

export default Projects;
