import { User, Video, Building2 } from 'lucide-react';
import imgJoin from '../../../../../assets/bg/join.jpg';

const Joinus = () => {
  return (
    <div
      id="service"
      className="max-w-screen-xl mx-auto py-16 text-white pb-11 mb-36"
    >
      <div className="relative">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">WHY JOIN US?</h2>
          <p className="text-lg text-gray-300">
            Our diverse membership base creates a friendly and supportive <br />
            atmosphere, where you can make friends and stay motivated.
          </p>
        </div>

        <div className="mb-8 max-w-[1180px] mx-auto relative">
          <img
            src={imgJoin}
            alt="Join Us"
            className="w-full h-auto rounded-lg shadow-lg p-4"
          />
        </div>

        <div className="lg:absolute bottom-[-60px] left-1/2 transform lg:-translate-x-1/2 flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:bg-secondary-dark rounded-lg lg:py-0 m-4">
          <div className="flex items-center bg-secondary-dark gap-3 p-6 rounded-lg shadow-md text-center w-full md:w-80">
            <div className="flex items-center justify-center bg-primary-light p-4 rounded mb-4">
              <User className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Personal Trainer</h3>
              <p className="text-gray-300">
                Unlock your potential with our expert Personal Trainers.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-secondary-dark gap-3 p-6 rounded-lg shadow-md text-center w-full md:w-80">
            <div className="flex items-center justify-center bg-primary-light p-4 rounded mb-4">
              <Video className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Practice Sessions</h3>
              <p className="text-gray-300">
                Elevate your fitness with practice sessions.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-secondary-dark gap-3 p-6 rounded-lg shadow-md text-center w-full md:w-80">
            <div className="flex items-center justify-center bg-primary-light p-4 rounded mb-4">
              <Building2 className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Good Management</h3>
              <p className="text-gray-300">
                Supportive management, for your fitness success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
