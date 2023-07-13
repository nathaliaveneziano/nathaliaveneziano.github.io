import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import data from '../../data';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';

function Testimonials() {
  const { testimonials } = data;
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Depoimentos</h2>

      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}>
        {testimonials.map(({ id, image, title, subtitle, comment }) => (
          <SwiperSlide className="testimonial__item" key={id}>
            <div className="testimonial__thumb">
              <img src={image} alt={title} />
            </div>
            <h3 className="testimonial__title">{title}</h3>
            <span className="testimonial__subtitle">{subtitle}</span>
            <div className="testimonial__comment">{comment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
