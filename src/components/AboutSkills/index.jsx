function AboutSkills({ id, name, number, newClass }) {
  return (
    <div className="skills__data" key={`skill-${id}`}>
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills__number">{number}</span>
      </div>

      <div className="skills__bar">
        <span className={`skills__percentage ${newClass}`}></span>
      </div>
    </div>
  );
}

export default AboutSkills;
