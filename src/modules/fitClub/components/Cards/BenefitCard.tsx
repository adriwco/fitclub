import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-center bg-secondary-dark gap-3 p-6 rounded-lg shadow-md text-center w-full md:w-80">
      <div className="flex items-center justify-center bg-primary-light p-4 rounded mb-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
