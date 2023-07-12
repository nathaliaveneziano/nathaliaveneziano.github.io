function ServiceCard({ id, image, title, description }) {
  return (
    <div className="services__card" key={id}>
      <img src={image} alt="" className="services__img" />
      <h3 className="services__title">{title}</h3>
      <p className="services__description">{description}</p>
    </div>
  );
}

export default ServiceCard;
