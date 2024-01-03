// deps
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
// components
// import BlocksCard from '../BlocksCard';
import Icon from '../Icon';
// services
import db from '../../services/firebase';
import { getCategories, getSkills } from '../../services/queries';
// styles
import { Button, grid } from '../../globalStyles';

const BlocksContainer = styled.div`
  overflow-y: auto;
  position: relative;
  padding-right: 1rem;
  padding-bottom: 1rem;
  max-height: 57vh;
  scrollbar-width: thin;
  scrollbar-color: var(--first-color) var(--body-color);

  &::-webkit-scrollbar {
    width: 0.25rem;
    box-sizing: border-box;
    padding-left: 0.125rem;
  }

  &:hover::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--body-color);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: var(--first-color);
  }
`;

const BlocksContainerGrid = styled.div`
  ${grid}
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem;

  @media screen and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 12fr;
  }
`;

const CardContainer = styled.div`
  overflow: hidden;
  background-color: var(--container-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardMask = styled.div`
  background: #6c6ce5;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  opacity: ${(props) => (props.$noHover ? 0.75 : 0)};

  ${CardContainer}:hover & {
    opacity: ${(props) => (props.$noHover ? 0 : 0.75)};
  }
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardCategory = styled.span`
  color: #fff;
  background-color: var(--first-color);
  border-bottom-left-radius: 0.98rem;
  border-bottom-right-radius: 0.98rem;
  position: absolute;
  top: 0;
  left: 1.5rem;
  font-size: var(--small-font-size);
  display: inline-block;
  padding: 0.19rem 0.625rem;
  transition: 0.3s;
  opacity: ${(props) => (props.$noHover ? 1 : 0)};
  transform: translateY(${(props) => (props.$noHover ? 0 : '-40px')});

  ${CardContainer}:hover & {
    opacity: ${(props) => (props.$noHover ? 0 : 1)};
    transform: translateY(${(props) => (props.$noHover ? '-40px' : 0)});
  }
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: var(--h2-font-size);
  padding-left: 0.98rem;
  padding-top: 2rem;
  transition: 0.3s;
  flex: 1;
  opacity: ${(props) => (props.$noHover ? 1 : 0)};
  transform: translateY(${(props) => (props.$noHover ? 0 : '30px')});

  ${CardContainer}:hover & {
    opacity: ${(props) => (props.$noHover ? 0 : 1)};
    transform: translateY(${(props) => (props.$noHover ? '30px' : 0)});
  }
`;

const CardContent = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const CardTechs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: var(--h3-font-size);
  transition: 0.3s;
  opacity: ${(props) => (props.$noHover ? 1 : 0)};

  ${CardContainer}:hover & {
    opacity: ${(props) => (props.$noHover ? 0 : 1)};
  }

  & span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #aaa;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
`;

const CardMeta = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  opacity: 0;

  ${CardContainer}:hover & {
    opacity: ${(props) => (props.$noHover ? 0 : 1)};
  }
`;

const CardDot = styled.span`
  font-size: 0.5rem;
  margin-top: 0.1rem;
`;

const CardButtons = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  transform: translateY(100px);
  transition: 0.3s;
  opacity: ${(props) => (props.$noHover ? 0 : 1)};
  transform: translateY(${(props) => (props.$noHover ? '100px' : 0)});

  ${CardContainer}:hover & {
    opacity: ${(props) => (props.$noHover ? 1 : 0)};
    transform: translateY(${(props) => (props.$noHover ? 0 : '100px')});
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

const CardButton = styled.a`
  color: #fff;
  font-size: var(--h3-font-size);
  background-color: #ffd15c;
  height: 40px;
  width: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s;
  opacity: ${(props) => (props.$noHover ? 1 : 0)};

  ${CardContainer}:hover & {
    opacity: ${(props) => (props.$noHover ? 0 : 1)};
  }
`;

BlocksGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.string,
  className: PropTypes.string,
};

function BlocksGrid({ data, page, className }) {
  const [skills, setSkills] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getSkillsData() {
      setSkills((await getSkills(db)) || []);
      setCategories((await getCategories(db)) || []);
    }

    getSkillsData();
  }, []);

  function getCategoryName(id) {
    if (categories.length > 0) {
      const findCategory = categories.find((category) => category.id === id);
      return findCategory.name;
    }
  }

  return (
    <BlocksContainer>
      <BlocksContainerGrid>
        {data.map(
          (item, index) =>
            item.active && (
              <div key={index}>
                <CardContainer key={item.id}>
                  <div className="card__thumbnail">
                    <img src={item.image} alt="" className="card__img" />
                    <CardMask $noHover={className}></CardMask>
                  </div>

                  <CardWrapper>
                    <CardCategory $noHover={className}>
                      {getCategoryName(item.category)}
                    </CardCategory>
                    <CardTitle $noHover={className}>{item.title}</CardTitle>

                    <CardContent>
                      {page === 'projects' && (
                        <CardTechs $noHover={className}>
                          {item.techs &&
                            item.techs.map((tech, index) => {
                              const findIcon = skills.find(
                                (skill) => skill.slug === tech
                              );

                              return (
                                findIcon && (
                                  <span
                                    style={{
                                      background: findIcon.background,
                                      color: findIcon.text,
                                    }}
                                    className="card__tech"
                                    key={index}
                                    title={tech}>
                                    <Icon img={findIcon.icon} typeIcon="si" />
                                  </span>
                                )
                              );
                            })}
                        </CardTechs>
                      )}

                      {page === 'blog' && item.date && item.author && (
                        <CardMeta>
                          <span>{item.date}</span>
                          <CardDot>
                            <Icon img="FaCircle" typeIcon="fa6" />
                          </CardDot>
                          <span>{item.author}</span>
                        </CardMeta>
                      )}
                    </CardContent>

                    <CardButtons $noHover={className}>
                      {page === 'blog' && item.url && (
                        <CardButton
                          $noHover={className}
                          href={item.url}
                          target="_blank"
                          rel="noreferrer">
                          <Icon img="SlLink" typeIcon="sl" />
                        </CardButton>
                      )}

                      <>
                        {page === 'projects' && item.url_github && (
                          <Button
                            $noHover={className}
                            href={item.url_github}
                            target="_blank"
                            rel="noreferrer">
                            <Icon img="SiGithub" typeIcon="si" />
                            Github
                          </Button>
                        )}
                        {page === 'projects' && item.url_figma && (
                          <Button
                            $noHover={className}
                            href={item.url_figma}
                            target="_blank"
                            rel="noreferrer">
                            <Icon img="SiFigma" typeIcon="si" />
                            Figma
                          </Button>
                        )}
                        {page === 'projects' && item.url_preview && (
                          <Button
                            $noHover={className}
                            href={item.url_preview}
                            target="_blank"
                            rel="noreferrer">
                            <Icon img="FaLaptop" typeIcon="fa6" />
                            Preview
                          </Button>
                        )}
                      </>
                    </CardButtons>
                  </CardWrapper>
                </CardContainer>
              </div>
            )
        )}
      </BlocksContainerGrid>
    </BlocksContainer>
  );
}

export default BlocksGrid;
