import React from 'react';
import PlanCard from '../../Cards/PlanCard';

const Plan: React.FC = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '$16',
      features: ['Smart workout plan', 'At home workouts'],
    },
    {
      title: 'Weekly Plan',
      price: '$25',
      features: ['PRO Gyms', 'Smart workout plan', 'At home workouts'],
    },
    {
      title: 'Monthly Plan',
      price: '$45',
      features: [
        'ELITE Gyms & Classes',
        'PRO Gyms',
        'Smart workout plan',
        'At home workouts',
        'Personal Training',
      ],
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 text-white mb-36">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">OUR PRICING PLAN</h2>
        <p className="text-gray-300">
          Our pricing plan comes with various membership tiers, each tailored to
          cater to different preferences and fitness aspirations.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Plan;
