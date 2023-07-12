import { ResumeCard } from '../../components';
import data from '../../data';
import './resume.css';

function Resume() {
  const { resume } = data;

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        {resume.categories.map((value) => (
          <div className="timeline grid" key={`resume-${value}`}>
            {resume[value].map(({ id, icon, year, title, desc }) => (
              <ResumeCard
                key={`${value}-${id}`}
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
