import React, { useRef } from 'react';
import Slider from 'react-slick';
import {
  BicepsFlexed,
  ShoppingBasket,
  HeartPulse,
  Bike,
  CircleChevronRight,
  CircleArrowLeft,
} from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Program: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="program" className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-tertiary-light">
          EXPLORE OUR PROGRAM
        </h2>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="text-white hover:text-orange-600 transition"
          >
            <CircleArrowLeft size={35} />
          </button>
          <button
            onClick={handleNext}
            className="text-white hover:text-orange-600 transition"
          >
            <CircleChevronRight size={35} />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        <div className="p-4">
          <div className="min-w-[250px] bg-secondary-dark text-white p-6 rounded-lg shadow-lg transition-all hover:shadow-[0_0_0_4px_rgba(249,172,84,1)]">
            <div className="w-14 flex items-center justify-center mb-4 bg-primary-light p-3 rounded">
              <BicepsFlexed className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Strength</h3>
            <p className="mb-4">
              Embrace the essence of strength as we delve into its various
              dimensions physical, mental, and emotional.
            </p>
            <button className="bg-primary-light text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
              Join Now →
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="min-w-[250px] bg-secondary-dark text-white p-6 rounded-lg shadow-lg transition-all hover:shadow-[0_0_0_4px_rgba(249,172,84,1)]">
            <div className="w-14 flex items-center justify-center mb-4 bg-primary-light p-3 rounded">
              <HeartPulse className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Physical Fitness</h3>
            <p className="mb-4">
              It encompasses a range of activities that improve health,
              strength, flexibility, and overall well-being.
            </p>
            <button className="bg-primary-light text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
              Join Now →
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="min-w-[250px] bg-secondary-dark text-white p-6 rounded-lg shadow-lg transition-all hover:shadow-[0_0_0_4px_rgba(249,172,84,1)]">
            <div className="w-14 flex items-center justify-center mb-4 bg-primary-light p-3 rounded">
              <Bike className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fat Lose</h3>
            <p className="mb-4">
              Through a combination of workout routines and expert guidance,
              we’ll empower you to reach your goals.
            </p>
            <button className="bg-primary-light text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
              Join Now →
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="min-w-[250px] bg-secondary-dark text-white p-6 rounded-lg shadow-lg transition-all hover:shadow-[0_0_0_4px_rgba(249,172,84,1)]">
            <div className="w-14 flex items-center justify-center mb-4 bg-primary-light p-3 rounded">
              <ShoppingBasket className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Weight Gain</h3>
            <p className="mb-4">
              Designed for individuals, our program offers an effective approach
              to gaining weight in a sustainable manner.
            </p>
            <button className="bg-primary-light text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
              Join Now →
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Program;
