// deps
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const ServicesCard = styled.div`
  text-align: center;
  padding: 1.875rem;
  border-radius: var(--border-radius);
  background-color: var(--container-color);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  &:nth-child(1) {
    background-color: rgb(108, 108, 229);
    box-shadow: 0px 5px 20px 0px rgb(108 108 229 / 50%);
  }

  &:nth-child(2) {
    background-color: rgb(249, 215, 76);
    box-shadow: 0px 5px 20px 0px rgb(249 215 76 / 50%);
  }

  &:nth-child(3) {
    background-color: rgb(249, 123, 139);
    box-shadow: 0px 5px 20px 0px rgb(249 123 139 / 50%);
  }
`;

const ServicesImg = styled.img`
  margin-bottom: 1.25rem;
`;

const ServicesTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: 1rem;
  color: #fff;

  ${ServiceCard}:nth-child(2) & {
    color: var(--titles-color);
  }
`;

const ServicesDescription = styled.p`
  color: #f8f9fa;

  ${ServiceCard}:nth-child(2) & {
    color: var(--text-color);
  }
`;

ServiceCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

function ServiceCard({ id, image, title, description }) {
  return (
    <ServicesCard key={id}>
      <ServicesImg src={image} />
      <ServicesTitle>{title}</ServicesTitle>
      <ServicesDescription>{description}</ServicesDescription>
    </ServicesCard>
  );
}

export default ServiceCard;
