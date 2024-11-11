import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-tertiary-light py-16">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-primary-light text-3xl mr-2">💪</span> FITCLUB
          </h2>
          <p className="text-sm mb-6">
            Take the first step towards a healthier, stronger you with our
            unbeatable pricing plans. Let's sweat, achieve, and conquer
            together!
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-primary-light hover:bg-orange-600 transition"
            >
              <Facebook className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-primary-light hover:bg-orange-600 transition"
            >
              <Instagram className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-primary-light hover:bg-orange-600 transition"
            >
              <Twitter className="text-white" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary-light">
                Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-light">
                Franchise
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-light">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-light">
                Network
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary-light">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-light">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-light">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary-light">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-light">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-light">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-light">
                BMI Calculator
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
