import { useEffect } from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import BookClass from '../components/BookClass/BookClass';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Joinus from '../components/Joinus/Joinus';
import Plan from '../components/Plan/Plan';
import Program from '../components/Program/Program';
import Review from '../components/Review/Review';

const Home = () => {
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

      <Header />
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
  );
};

export default Home;
