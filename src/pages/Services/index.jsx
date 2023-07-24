import { useContext } from 'react';
import { styled } from 'styled-components';
import { ServiceCard } from '../../components';
import { SectionTitle, container, grid, section } from '../../globalStyles';
import DataContext from '../../services/DataContext';

const ServicesContainer = styled.section`
  ${container}
  ${section}
`;

const ServicesWrapper = styled.div`
  ${grid}
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem;

  @media screen and (max-width: 767px) {
    grid-template-columns: 12fr;
  }
`;

function Services() {
  const data = useContext(DataContext);
  const { services } = data;

  return (
    <ServicesContainer id="services">
      <SectionTitle>Services</SectionTitle>

      <ServicesWrapper>
        {services.map(({ id, image, title, description }) => (
          <ServiceCard
            id={id}
            image={image}
            title={title}
            description={description}
            key={`services-${id}`}
          />
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
