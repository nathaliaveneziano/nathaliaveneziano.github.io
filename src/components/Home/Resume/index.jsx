// deps
import { useContext } from 'react';
import { styled } from 'styled-components';
// components
import ResumeCard from '../../ResumeCard';
// services
import DataContext from '../../../services/DataContext';
// styles
import { SectionTitle, container, grid, section } from '../../../globalStyles';

const ResumeContainer = styled.section`
  ${container}
  ${section}
`;

const ResumeGrid = styled.div`
  ${grid}
  gap: 1.875rem;
`;

const Timeline = styled.div`
  ${grid}
  background-color: var(--container-color);
  padding: 1.875rem;
  border-radius: var(--border-radius);
  position: relative;
  box-shadow: var(--shadow);
`;

function Resume() {
  const data = useContext(DataContext);
  const { resume } = data;
  const categories = Object.keys(resume);

  function captilizeTitle(title) {
    return title.charAt(0).toUpperCase() + title.slice(1);
  }

  return (
    <>
      {categories.map((value, index) => (
        <ResumeContainer id="resume" key={index}>
          <SectionTitle>{captilizeTitle(value)}</SectionTitle>

          <ResumeGrid>
            <Timeline key={`resume-${value}`}>
              {resume[value].map(({ id, year, title, desc, organization }) => (
                <ResumeCard
                  key={id}
                  icon={{
                    icon:
                      value === 'education' ? 'SlGraduation' : 'SlBriefcase',
                    type: 'sl',
                  }}
                  year={year}
                  title={title}
                  desc={desc}
                  organization={organization}
                />
              ))}
            </Timeline>
          </ResumeGrid>
        </ResumeContainer>
      ))}
    </>
  );
}

export default Resume;
