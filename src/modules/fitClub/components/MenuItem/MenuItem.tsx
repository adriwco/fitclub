import React from 'react';

interface MenuItemProps {
  href: string;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative text-tertiary-light hover:text-primary-light group py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-light transition-all duration-300 ease-out group-hover:w-1/2"></span>
    </a>
  );
};

export default MenuItem;
