import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { Icon } from '../index';
import { Button } from '../../globalStyles';

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
  font-size: var(--h3-font-size);
  /* padding-bottom: 0.98rem; */
  padding-top: 1.5rem;
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
  opacity: ${(props) => (props.$noHover ? 1 : 0)};
  transform: translateY(${(props) => (props.$noHover ? 0 : '100px')});

  ${CardContainer}:hover & {
    opacity: ${(props) => (props.$noHover ? 0 : 1)};
    transform: translateY(${(props) => (props.$noHover ? '100px' : 0)});
  }
`;

const CardButton = styled.a`
  color: #fff;
  font-size: var(--h3-font-size);
  background-color: #ffd15c;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s;
  opacity: ${(props) => (props.$noHover ? 1 : 0)};

  ${CardContainer}:hover & {
    opacity: ${(props) => (props.$noHover ? 0 : 1)};
  }
`;

BlocksCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  active: PropTypes.bool,
  techs: PropTypes.arrayOf(PropTypes.object),
  date: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
  url_github: PropTypes.string,
  url_preview: PropTypes.string,
  className: PropTypes.string,
};

function BlocksCard({
  id,
  title,
  category,
  image,
  active,
  techs = [],
  date = '',
  author = '',
  url = '',
  url_github = '',
  url_preview = '',
  className = '',
}) {
  return (
    <>
      {active && (
        <CardContainer key={id}>
          <div className="card__thumbnail">
            <img src={image} alt="" className="card__img" />
            <CardMask $noHover={className}></CardMask>
          </div>

          <CardWrapper>
            <CardCategory $noHover={className}>{category}</CardCategory>
            <CardTitle $noHover={className}>{title}</CardTitle>

            <CardContent>
              {techs.length > 0 && (
                <CardTechs $noHover={className}>
                  {techs.map(({ tech, icon }, index) => (
                    <span className="card__tech" key={index} title={tech}>
                      <Icon img={icon} typeIcon="si" />
                    </span>
                  ))}
                </CardTechs>
              )}

              {date && author && (
                <CardMeta>
                  <span>{date}</span>
                  <CardDot>
                    <Icon img="FaCircle" typeIcon="fa6" />
                  </CardDot>
                  <span>{author}</span>
                </CardMeta>
              )}
            </CardContent>

            <CardButtons $noHover={className}>
              {url && (
                <CardButton
                  $noHover={className}
                  href={url}
                  target="_blank"
                  rel="noreferrer">
                  <Icon img="SlLink" typeIcon="sl" />
                </CardButton>
              )}

              {url_github && url_preview && (
                <>
                  <Button
                    $noHover={className}
                    href={url_github}
                    target="_blank"
                    rel="noreferrer">
                    Github
                  </Button>
                  <Button
                    $noHover={className}
                    href={url_preview}
                    target="_blank"
                    rel="noreferrer">
                    Preview
                  </Button>
                </>
              )}
            </CardButtons>
          </CardWrapper>
        </CardContainer>
      )}
    </>
  );
}

export default BlocksCard;
