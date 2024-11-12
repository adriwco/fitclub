import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`bg-primary-light text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
