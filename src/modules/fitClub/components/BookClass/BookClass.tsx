import imgBig from '../../../../assets/bg/class-1.jpg';
import imgSmall from '../../../../assets/bg/class-2.jpg';

const BookClass = () => {
  return (
    <div className="max-w-screen-xl mx-auto relative flex flex-col lg:flex-row items-center justify-between text-white p-16 rounded-lg my-36">
      <div className="relative lg:w-1/2 w-full lg:pr-8 mb-8 lg:mb-0">
        <img
          src={imgBig}
          alt="Class Session"
          className="w-full lg:w-3/4 h-auto rounded-lg shadow-lg object-cover mx-auto lg:absolute lg:bottom-[-70px] lg:right-10"
        />
        <div className="absolute top-0 left-0 w-64 h-40 overflow-hidden rounded-lg shadow-lg hidden lg:block">
          <img
            src={imgSmall}
            alt="Instructor"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:pl-8 text-center lg:text-left">
        <h2 className="text-3xl font-semibold mb-4">
          THE CLASS YOU WILL GET HERE
        </h2>
        <p className="mb-6">
          Led by our team of expert and motivational instructors, "The Class You
          Will Get Here" is a high-energy, results-driven session that combines
          a perfect blend of cardio, strength training, and functional
          exercises. Each class is carefully curated to keep you engaged and
          challenged, ensuring you never hit a plateau in your fitness
          endeavors.
        </p>
        <button className="bg-primary-light text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
          Book A Class
        </button>
      </div>
    </div>
  );
};

export default BookClass;
