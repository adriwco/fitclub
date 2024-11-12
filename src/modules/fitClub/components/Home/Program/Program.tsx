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
import ProgramCard from '../../Cards/ProgramCard';

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
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const programData = [
    {
      icon: <BicepsFlexed className="text-white text-3xl" />,
      title: 'Strength',
      description:
        'Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.',
    },
    {
      icon: <HeartPulse className="text-white text-3xl" />,
      title: 'Physical Fitness',
      description:
        'It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.',
    },
    {
      icon: <Bike className="text-white text-3xl" />,
      title: 'Fat Lose',
      description:
        'Through a combination of workout routines and expert guidance, we’ll empower you to reach your goals.',
    },
    {
      icon: <ShoppingBasket className="text-white text-3xl" />,
      title: 'Weight Gain',
      description:
        'Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.',
    },
  ];

  return (
    <div id="program" className="max-w-screen-xl mx-auto px-4 md:px-10 py-16">
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
        {programData.map((program, index) => (
          <div key={index} className="p-4">
            <ProgramCard
              icon={program.icon}
              title={program.title}
              description={program.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Program;
