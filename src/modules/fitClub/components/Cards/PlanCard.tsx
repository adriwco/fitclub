import React from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  features,
  buttonText = 'Join Now',
}) => {
  return (
    <div className="w-80 bg-secondary-dark p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-primary-light hover:scale-105 transition-all flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-4xl font-bold mb-4">{price}</p>
        <hr className="border-t border-gray-500 mb-4" />
        <ul className="space-y-2 text-gray-300 mb-6">
          {features.map((feature, index) => (
            <li key={index}>✔️ {feature}</li>
          ))}
        </ul>
      </div>
      <button
        aria-label={buttonText}
        className="w-full bg-transparent text-primary-light py-2 px-4 rounded-lg border border-primary-light hover:bg-primary-light hover:text-white transition duration-300 mt-auto"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PlanCard;
