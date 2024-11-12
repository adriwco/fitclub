import React from 'react';
import Button from '../Button/Button';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  icon,
  title,
  description,
  buttonText = 'Join Now →',
}) => {
  return (
    <div className="min-w-[250px] max-w-full bg-secondary-dark text-white p-6 rounded-lg shadow-lg transition-all hover:shadow-[0_0_0_4px_rgba(249,172,84,1)]">
      <div className="w-14 flex items-center justify-center mb-4 bg-primary-light p-3 rounded">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Button ariaLabel={buttonText}>{buttonText}</Button>
    </div>
  );
};

export default ProgramCard;
