import imgMan from '../../../../../assets/bg/header.png';

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
        <button className="bg-primary-light text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50">
          Get Started
        </button>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute w-80 h-80 rounded-full bg-primary-light opacity-20 z-0"></div>
        <img
          src={imgMan}
          alt="Man lifting weights"
          className="w-80 object-cover z-10"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-[10rem] font-bold opacity-5">
        FITNESS
      </div>
    </div>
  );
};

export default AboutUs;
