import { useRef } from 'react';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import user from '../../../../../assets/review_users/member.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReviewCard from '../../Cards/ReviewCard';

const Review: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const reviews = [
    {
      text: 'What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals.',
      rating: 4.5,
      reviewerName: 'Jane Cooper',
      reviewerJob: 'Software Developer',
      reviewerImage: user,
    },
    {
      text: 'This gym has changed my life. The facilities are top-notch, and the environment is so motivating. The trainers truly care about your progress.',
      rating: 5,
      reviewerName: 'John Smith',
      reviewerJob: 'Fitness Enthusiast',
      reviewerImage: user,
    },
  ];

  return (
    <div
      id="community"
      className="max-w-screen-xl mx-auto text-tertiary-light py-16 relative px-10 md:px-40"
    >
      <Quote
        className="absolute text-primary-light opacity-10"
        size={150}
        style={{
          top: '10px',
          left: '10px',
        }}
      />

      <h3 className="text-lg font-semibold uppercase mb-4 relative z-10">
        Member Reviews
      </h3>

      <Slider ref={sliderRef} {...settings} className="px-4 relative z-10">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            text={review.text}
            rating={review.rating}
            reviewerName={review.reviewerName}
            reviewerJob={review.reviewerJob}
            reviewerImage={review.reviewerImage}
          />
        ))}
      </Slider>

      <div className="absolute bottom-4 right-4 flex items-center gap-4 z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex justify-center items-center rounded-full bg-primary-light hover:bg-orange-600 transition"
        >
          <ArrowLeft className="text-white" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 flex justify-center items-center rounded-full bg-primary-light hover:bg-orange-600 transition"
        >
          <ArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Review;
