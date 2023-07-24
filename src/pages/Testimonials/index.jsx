import { useContext } from 'react';
import { styled } from 'styled-components';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle, container, section } from '../../globalStyles';
import DataContext from '../../services/DataContext';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';

const TestimonialsContainer = styled.section`
  ${container}
  ${section}
`;

const TestimonialThumb = styled.div`
  height: 5.6rem;
  width: 5.6rem;
  margin: 0 auto;
`;

const TestimonialTitle = styled.h3`
  margin-top: 0.75rem;
`;

const TestimonialSubtitle = styled.span`
  color: #8b88b1;
  font-size: var(--small-font-size);
`;

const TestimonialComment = styled.div`
  background-color: var(--container-color);
  padding: 1.875rem;
  margin-top: 1.5rem;
  box-shadow: var(-shadow);
  border-radius: var(--border-radius);
  position: relative;
  margin-bottom: 3rem;

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--container-color);
    position: absolute;
    left: 50%;
    top: -0.625rem;
    margin-left: -5px;
    transform: translateX(-7.5px);
  }
`;

function Testimonials() {
  const data = useContext(DataContext);
  const { testimonials } = data;
  return (
    <TestimonialsContainer>
      <SectionTitle>Depoimentos</SectionTitle>

      <TestimonialsWrapper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}>
        {testimonials.map(({ id, image, title, subtitle, comment }) => (
          <TestimonialItem className="testimonial__item" key={id}>
            <TestimonialThumb>
              <img src={image} alt={title} />
            </TestimonialThumb>
            <TestimonialTitle>{title}</TestimonialTitle>
            <TestimonialSubtitle>{subtitle}</TestimonialSubtitle>
            <TestimonialComment>{comment}</TestimonialComment>
          </TestimonialItem>
        ))}
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
}

export default Testimonials;

const TestimonialsWrapper = styled(Swiper)`
  max-width: 700px;
`;

const TestimonialItem = styled(SwiperSlide)`
  text-align: center;
  padding: 0 1.25rem 1.25rem;
`;
