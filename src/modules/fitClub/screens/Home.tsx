import { useEffect, useState } from 'react';
import AboutUs from '../components/Home/AboutUs/AboutUs';
import BookClass from '../components/Home/BookClass/BookClass';
import Footer from '../components/Home/Footer/Footer';
import Header from '../components/Home/Header/Header';
import Joinus from '../components/Home/Joinus/Joinus';
import Plan from '../components/Home/Plan/Plan';
import Program from '../components/Home/Program/Program';
import Review from '../components/Home/Review/Review';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const lights = document.querySelectorAll<HTMLElement>('.light');
    const moveLights = () => {
      lights.forEach((light) => {
        const x = Math.random() * window.innerWidth - 200;
        const y = Math.random() * window.innerHeight - 200;
        light.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const interval = setInterval(moveLights, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-primary-dark overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-yellow-500 opacity-5 blur-[120px] light"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-yellow-500 opacity-5 blur-[150px] light"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-yellow-500 opacity-5 blur-[100px] light"></div>
      </div>

      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? 'filter blur-sm brightness-75' : ''
        }`}
      >
        <AboutUs />
        <Program />
        <BookClass />
        <Joinus />
        <Plan />
        <div className="bg-tertiary-dark">
          <Review />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
