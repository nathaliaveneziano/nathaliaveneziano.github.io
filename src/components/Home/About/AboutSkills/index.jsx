import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Icon from '../../../Icon';

import db from '../../../../services/firebase';
import { getSkills } from '../../../../services/queries';

import { grid } from '../../../../globalStyles';

const AboutSkillsComponent = styled.div`
  ${grid}
`;

const AboutTitle = styled.h3`
  font-size: 1.875rem;
  padding: 0 0 0.5rem;
`;

const AboutTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }
`;

const AboutTechSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  gap: 0.25rem;
  background-color: ${(props) => props.$background};
  color: ${(props) => props.$text};
`;

function AboutSkills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function getSkillsData() {
      setSkills((await getSkills(db)) || []);
    }

    getSkillsData();
  }, []);

  return (
    <AboutSkillsComponent>
      <AboutTitle>Conhecimentos</AboutTitle>
      <AboutTech>
        {skills.length > 0 &&
          skills.map(
            ({ name, slug, icon, background, text, active }) =>
              active && (
                <AboutTechSpan
                  className={`${slug}`}
                  key={`tech-${slug}`}
                  $background={background}
                  $text={text}>
                  <Icon img={icon} typeIcon="si" />
                  {name}
                </AboutTechSpan>
              )
          )}
      </AboutTech>
    </AboutSkillsComponent>
  );
}

export default AboutSkills;
