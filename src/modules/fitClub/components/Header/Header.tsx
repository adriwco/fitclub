import Logo from '../../../../assets/logo/logo.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
      <div>
        <img src={Logo} alt="Logo" className="h-8" />
      </div>

      <nav className="hidden md:flex space-x-8">
        <a
          href="#home"
          className="relative text-tertiary-light hover:text-primary-light group py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-light transition-all duration-300 ease-out group-hover:w-1/2"></span>
        </a>
        <a
          href="#program"
          className="relative text-tertiary-light hover:text-primary-light group py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
        >
          Program
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-light transition-all duration-300 ease-out group-hover:w-1/2"></span>
        </a>
        <a
          href="#service"
          className="relative text-tertiary-light hover:text-primary-light group py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
        >
          Service
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-light transition-all duration-300 ease-out group-hover:w-1/2"></span>
        </a>
        <a
          href="#about"
          className="relative text-tertiary-light hover:text-primary-light group py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-light transition-all duration-300 ease-out group-hover:w-1/2"></span>
        </a>
        <a
          href="#community"
          className="relative text-tertiary-light hover:text-primary-light group py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
        >
          Community
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-light transition-all duration-300 ease-out group-hover:w-1/2"></span>
        </a>
      </nav>

      <div>
        <button className="bg-primary-light text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50">
          Join Now
        </button>
      </div>
    </header>
  );
};

export default Header;
