import React from 'react';
import Logo from '../../../../../assets/logo/logo.png';
import MenuItem from '../../MenuItem/MenuItem';

const Header: React.FC = () => {
  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#program', label: 'Program' },
    { href: '#service', label: 'Service' },
    { href: '#about', label: 'About' },
    { href: '#community', label: 'Community' },
  ];

  return (
    <header className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
      <div>
        <img src={Logo} alt="Logo" className="h-8" />
      </div>

      <nav className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <MenuItem key={item.href} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </nav>

      <button className="bg-primary-light text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50">
        Join Now
      </button>
    </header>
  );
};

export default Header;
