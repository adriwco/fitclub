import { useRef } from 'react';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import user from '../../../../../assets/review_users/member.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Review = () => {
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
        <div>
          <div className="md:w-full mb-8">
            <p className="text-xl mb-4">
              What truly sets this gym apart is their expert team of trainers.
              The trainers are knowledgeable, approachable, and genuinely
              invested in helping members achieve their fitness goals.
            </p>
            <div className="flex items-center gap-1 mb-6">
              <span className="text-primary-light text-2xl">★</span>
              <span className="text-primary-light text-2xl">★</span>
              <span className="text-primary-light text-2xl">★</span>
              <span className="text-primary-light text-2xl">★</span>
              <span className="text-primary-light text-2xl">½</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={user}
                alt="Reviewer"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-bold">Jane Cooper</h4>
                <p className="text-sm text-gray-400">Software Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="md:w-full mb-8">
            <p className="text-xl mb-4">
              This gym has changed my life. The facilities are top-notch, and
              the environment is so motivating. The trainers truly care about
              your progress.
            </p>
            <div className="flex items-center gap-1 mb-6">
              <span className="text-primary-light text-2xl">★</span>
              <span className="text-primary-light text-2xl">★</span>
              <span className="text-primary-light text-2xl">★</span>
              <span className="text-primary-light text-2xl">★</span>
              <span className="text-primary-light text-2xl">★</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={user}
                alt="Reviewer"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-bold">John Smith</h4>
                <p className="text-sm text-gray-400">Fitness Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
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
