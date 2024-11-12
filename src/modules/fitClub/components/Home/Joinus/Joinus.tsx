import React from 'react';
import { User, Video, Building2 } from 'lucide-react';
import imgJoin from '../../../../../assets/bg/join.jpg';
import BenefitCard from '../../Cards/BenefitCard';

const Joinus: React.FC = () => {
  const benefits = [
    {
      icon: <User className="text-white text-2xl" />,
      title: 'Personal Trainer',
      description: 'Unlock your potential with our expert Personal Trainers.',
    },
    {
      icon: <Video className="text-white text-2xl" />,
      title: 'Practice Sessions',
      description: 'Elevate your fitness with practice sessions.',
    },
    {
      icon: <Building2 className="text-white text-2xl" />,
      title: 'Good Management',
      description: 'Supportive management, for your fitness success.',
    },
  ];

  return (
    <div
      id="service"
      className="max-w-screen-xl mx-auto py-16 text-white pb-11 mb-36"
    >
      <div className="relative">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">WHY JOIN US?</h2>
          <p className="text-lg text-gray-300">
            Our diverse membership base creates a friendly and supportive <br />
            atmosphere, where you can make friends and stay motivated.
          </p>
        </div>

        <div className="mb-8 max-w-[1180px] mx-auto relative">
          <img
            src={imgJoin}
            alt="Join Us"
            className="w-full h-auto rounded-lg shadow-lg p-4"
          />
        </div>

        <div className="lg:absolute bottom-[-60px] left-1/2 transform lg:-translate-x-1/2 flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:bg-secondary-dark rounded-lg lg:py-0 m-4">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Joinus;
