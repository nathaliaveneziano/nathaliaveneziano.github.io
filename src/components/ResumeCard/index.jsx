import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { Icon } from '../index';

const ResumeCardItem = styled.div`
  position: relative;
  padding-left: 3.125rem;
  padding-bottom: 3.125rem;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0.25rem;
    top: 0;
    background-color: var(--first-color);
  }

  svg {
    box-sizing: initial;
    position: absolute;
    left: -0.4375rem;
    top: 0;
    font-size: var(--h2-font-size);
    color: var(--first-color);
    background-color: var(--container-color);
    padding: 0.4375rem 0;
  }
`;

const ResumeCardYear = styled.span`
  color: #8b88b1;
  font-size: var(--small-font-size);
`;

const ResumeCardTitle = styled.h3`
  font-size: var(--h2-font-size);
  margin-top: 0.5rem;
`;

const ResumeCardOrganization = styled.p`
  font-size: var(--smaller-font-size);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

ResumeCard.propTypes = {
  icon: PropTypes.object,
  year: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  organization: PropTypes.string,
};

function ResumeCard({ icon, year, title, desc, organization }) {
  return (
    <ResumeCardItem>
      <Icon img={icon.icon} typeIcon={icon.type} />
      <ResumeCardYear>{year}</ResumeCardYear>
      <ResumeCardTitle>{title}</ResumeCardTitle>
      <ResumeCardOrganization>{organization}</ResumeCardOrganization>
      <p
        className="resume__card-text"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </ResumeCardItem>
  );
}

export default ResumeCard;
