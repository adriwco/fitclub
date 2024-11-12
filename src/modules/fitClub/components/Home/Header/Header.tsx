import React, { useEffect } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import Logo from '../../../../../assets/logo/logo.png';
import MenuItem from '../../MenuItem/MenuItem';
import Button from '../../Button/Button';
import { AlignRight, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#program', label: 'Program' },
    { href: '#service', label: 'Service' },
    { href: '#about', label: 'About' },
    { href: '#community', label: 'Community' },
  ];

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMenuOpen]);

  return (
    <div id="home">
      <div
        className={`transition-all duration-300 ${isMenuOpen ? 'hidden' : ''}`}
      >
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

          <div className="hidden md:block">
            <Button ariaLabel="Join Now">Join Now</Button>
          </div>
        </header>
      </div>

      <Menu
        right
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
        className="block md:hidden"
        customBurgerIcon={
          <div className="text-white flex bg-primary-light rounded md:hidden justify-center items-center">
            <AlignRight />
          </div>
        }
        customCrossIcon={
          <div className="rounded">
            <X color="black" />
          </div>
        }
      >
        <div className="mb-10">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>

        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-label={`Navigate to ${item.label}`}
            className="text-tertiary-light text-lg block mb-4 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}

        <Button
          ariaLabel="Join Now"
          className="bg-orange-600 hover:bg-orange-700 text-white w-full py-2 mt-4"
        >
          Join Now
        </Button>
      </Menu>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;
