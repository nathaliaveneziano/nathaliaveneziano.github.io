import data from '../../data.json';
import Service1 from '../../assets/service-1.svg';
import Service2 from '../../assets/service-2.svg';
import Service3 from '../../assets/service-3.svg';
import './services.css';

function Services() {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.services.map(({ id, image, title, description }) => {
          let img = '';

          if (image === 'Service1') {
            img = Service1;
          } else if (image === 'Service2') {
            img = Service2;
          } else if (image === 'Service3') {
            img = Service3;
          }

          return (
            <div className="services__card" key={id}>
              <img src={img} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
