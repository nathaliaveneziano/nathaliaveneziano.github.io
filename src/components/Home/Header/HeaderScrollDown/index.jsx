// deps
import { keyframes, styled } from 'styled-components';

const ScrollDown = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 0;
  width: 100%;
`;

const ScrollName = styled.span`
  font-size: var(--small-font-size);
  color: var(--title-color);
`;

const Mouse = styled.span`
  border: 2px solid #454360;
  display: block;
  height: 1.6rem;
  width: 1.25rem;
  margin: auto;
  margin-top: 0.75rem;
  border-radius: 1rem;
  position: relative;
`;

const AniMouse = keyframes`
  0% {
    top: 29%;
  }
  15% {
    top: 50%;
  }
  50% {
    top: 50%;
  }
  100% {
    top: 29%;
  }
`;

const Wheel = styled.span`
  background-color: var(--title-color);
  border-radius: 100%;
  width: 0.25rem;
  height: 0.25rem;
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${AniMouse} 2s linear infinite;
`;

function HeaderScrollDown() {
  return (
    <ScrollDown>
      <a href="#about">
        <ScrollName>Deslize</ScrollName>
        <Mouse>
          <Wheel></Wheel>
        </Mouse>
      </a>
    </ScrollDown>
  );
}

export default HeaderScrollDown;
