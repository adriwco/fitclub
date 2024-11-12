import imgMan from '../../../../../assets/bg/header.png';
import Button from '../../Button/Button';

const AboutUs = () => {
  return (
    <div
      id="about"
      className="relative max-w-screen-xl mx-auto px-4 py-16 flex items-center justify-between"
    >
      <div className="text-left max-w-xl">
        <p className="text-secondary-light text-xl font-semibold mb-4">
          BEST FITNESS IN THE TOWN
        </p>
        <h1 className="text-7xl font-bold mb-4">
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: '2px white',
              WebkitTextFillColor: 'transparent',
            }}
          >
            MAKE
          </span>{' '}
          <span className="text-white">YOUR</span> <br />
          <span className="text-white">BODY SHAPE</span>
        </h1>

        <p className="text-tertiary-light text-lg mb-6">
          Unleash your potential and embark on a journey towards a stronger,
          fitter, and more confident you. Sign up for 'Make Your Body Shape' now
          and witness the incredible transformation your body is capable of!
        </p>
        <Button>Get Started</Button>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute w-80 h-80 rounded-full border-[50px] border-primary-light opacity-10 z-0 top-5" />

        <img
          src={imgMan}
          alt="Man lifting weights"
          className="md:w-80 w-[1000px] object-cover z-10"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-[10rem] font-bold opacity-5">
        FITNESS
      </div>
    </div>
  );
};

export default AboutUs;
