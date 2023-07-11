import { Card } from '../../components';
import data from '../../data.json';
import './resume.css';

function Resume() {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        {data.resume.categories.map((value) => (
          <div className="timeline grid" key={`resume-${value}`}>
            {data.resume[value].map(({ icon, year, title, desc }, index) => (
              <Card
                key={`${value}-${index}`}
                icon={{ icon: icon, type: 'sl' }}
                year={year}
                title={title}
                desc={desc}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resume;
