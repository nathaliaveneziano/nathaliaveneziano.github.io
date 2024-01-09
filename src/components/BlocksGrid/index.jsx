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
  /* opacity: ${(props) => (props.$noHover ? 0.75 : 0)}; */
  opacity: 0.75;

  ${CardContainer}:hover & {
    /* opacity: ${(props) => (props.$noHover ? 0 : 0.75)}; */
    opacity: 0;
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
  /* opacity: ${(props) => (props.$noHover ? 1 : 0)}; */
  /* transform: translateY(${(props) => (props.$noHover ? 0 : '-40px')}); */
  opacity: 1;
  transform: translateY(0);

  ${CardContainer}:hover & {
    /* opacity: ${(props) => (props.$noHover ? 0 : 1)}; */
    /* transform: translateY(${(props) => (props.$noHover ? '-40px' : 0)}); */
    opacity: 0;
    transform: translateY(-40px);
  }
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: var(--h2-font-size);
  padding: 2rem 0.98rem 0.5rem 0.98rem;
  transition: 0.3s;
  flex: 1;
  /* opacity: ${(props) => (props.$noHover ? 1 : 0)}; */
  /* transform: translateY(${(props) => (props.$noHover ? 0 : '30px')}); */
  opacity: 1;
  transform: translateY(0);

  ${CardContainer}:hover & {
    /* opacity: ${(props) => (props.$noHover ? 0 : 1)}; */
    /* transform: translateY(${(props) => (props.$noHover ? '30px' : 0)}); */
    opacity: 0;
    transform: translateY(30px);
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
  font-size: var(--h2-font-size);
  transition: 0.3s;
  /* opacity: ${(props) => (props.$noHover ? 1 : 0)}; */
  opacity: 1;

  ${CardContainer}:hover & {
    /* opacity: ${(props) => (props.$noHover ? 0 : 1)}; */
    opacity: 0;
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
  /* opacity: ${(props) => (props.$noHover ? 1 : 0)}; */
  opacity: 1;

  ${CardContainer}:hover & {
    /* opacity: ${(props) => (props.$noHover ? 0 : 1)}; */
    opacity: 0;
  }

  & span a {
    color: #fff;
    text-decoration: underline;
    font-weight: bold;
  }
`;

const CardDot = styled.span`
  font-size: 0.5rem;
  margin-top: 0.1rem;
`;

const CardButtons = styled.div`
  flex: 1;
  position: absolute;
  bottom: 0.5rem;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  transform: translateY(100px);
  transition: 0.3s;
  opacity: 0;

  ${CardContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding-inline: 1rem;
  }

  @media screen and (max-width: 1149px) {
    & {
      justify-content: center;
      gap: 1rem;
    }

    & span {
      display: none;
    }
  }
`;

const CardButton = styled(Button)`
  background-color: #ffd15c;
  transition: 0.3s;
  opacity: ${(props) => (props.$noHover ? 1 : 0)};

  ${CardContainer}:hover & {
    transform: translateY(${(props) => (props.$noHover ? '100px' : 0)});
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

  function formattedDate(date) {
    return new Date(date.seconds * 1000).toLocaleDateString('pt-BR');
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

                      {page === 'blog' && item.createAt && item.author && (
                        <CardMeta>
                          <time dateTime={formattedDate(item.createAt)}>
                            {formattedDate(item.createAt)}
                          </time>
                          <CardDot>
                            <Icon img="FaCircle" typeIcon="fa6" />
                          </CardDot>
                          <span>
                            <a
                              href={item.authorURI}
                              target="_blank"
                              rel="noreferrer">
                              {item.author}
                            </a>
                          </span>
                        </CardMeta>
                      )}
                    </CardContent>

                    <CardButtons $noHover={className} className="card__buttons">
                      {page === 'blog' && item.url && (
                        <CardButton
                          className="card__button"
                          $noHover={className}
                          href={item.url}
                          target="_blank"
                          rel="noreferrer">
                          <Icon img="SlLink" typeIcon="sl" />
                          <span>Link</span>
                        </CardButton>
                      )}

                      <>
                        {page === 'projects' && item.url_github && (
                          <Button
                            className="card__button"
                            $noHover={className}
                            href={item.url_github}
                            target="_blank"
                            rel="noreferrer">
                            <Icon img="SiGithub" typeIcon="si" />
                            <span>Github</span>
                          </Button>
                        )}
                        {page === 'projects' && item.url_figma && (
                          <Button
                            className="card__button"
                            $noHover={className}
                            href={item.url_figma}
                            target="_blank"
                            rel="noreferrer">
                            <Icon img="SiFigma" typeIcon="si" />
                            <span>Figma</span>
                          </Button>
                        )}
                        {page === 'projects' && item.url_preview && (
                          <Button
                            className="card__button"
                            $noHover={className}
                            href={item.url_preview}
                            target="_blank"
                            rel="noreferrer">
                            <Icon img="FaLaptop" typeIcon="fa6" />
                            <span>Preview</span>
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
