import { ServiceCard } from '../../components';
import data from '../../data';
import './services.css';

function Services() {
  const { services } = data;

  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {services.map(({ id, image, title, description }) => (
          <ServiceCard
            id={id}
            image={image}
            title={title}
            description={description}
            key={`services-${id}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
