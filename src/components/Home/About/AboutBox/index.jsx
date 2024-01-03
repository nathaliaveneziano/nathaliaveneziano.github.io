import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Icon from '../../../Icon';

import db from '../../../../services/firebase';
import { getBoxes } from '../../../../services/queries';

import { grid } from '../../../../globalStyles';

const AboutBoxes = styled.div`
  ${grid}
  grid-template-columns: repeat(4, 1fr);
  gap: 1.875rem;
  margin-top: 4.35rem;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AboutBoxComponent = styled.div`
  display: flex;
  column-gap: 1.5rem;

  svg {
    font-size: 4rem;
    color: #dedeea;
  }
`;

const AboutTitle = styled.h3`
  font-size: 1.875rem;
  padding: 0 0 0.5rem;
`;

const AboutSubtitle = styled.span`
  font-size: var(--small-font-size);
`;

function AboutBox() {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    async function getBoxesData() {
      setBoxes((await getBoxes(db)) || []);
    }

    getBoxesData();
  }, []);

  return (
    <AboutBoxes>
      {boxes.length > 0 &&
        boxes.map(({ id, icon, title, subtitle }) => (
          <AboutBoxComponent key={id}>
            <Icon img={icon} typeIcon="sl" />

            <div>
              <AboutTitle>{title}</AboutTitle>
              <AboutSubtitle>{subtitle}</AboutSubtitle>
            </div>
          </AboutBoxComponent>
        ))}
    </AboutBoxes>
  );
}

export default AboutBox;
