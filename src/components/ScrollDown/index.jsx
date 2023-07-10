import './scrollDown.css';

function ScrollDown() {
  return (
    <div className="scroll__down">
      <a href="#about" className="mouse__wrapper">
        <span className="scroll__name">Deslize</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
}

export default ScrollDown;
