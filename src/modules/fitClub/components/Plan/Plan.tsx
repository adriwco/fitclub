const Plan = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 text-white mb-36">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">OUR PRICING PLAN</h2>
        <p className="text-gray-300">
          Our pricing plan comes with various membership tiers, each tailored to
          cater to different preferences and fitness aspirations.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-80 bg-secondary-dark p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-primary-light hover:scale-105 transition-all flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
            <p className="text-4xl font-bold mb-4">$16</p>
            <hr className="border-t border-gray-500 mb-4" />
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>✔️ Smart workout plan</li>
              <li>✔️ At home workouts</li>
            </ul>
          </div>
          <button className="w-full bg-transparent text-primary-light py-2 px-4 rounded-lg border border-primary-light hover:bg-primary-light hover:text-white transition duration-300 mt-auto">
            Join Now
          </button>
        </div>

        <div className="w-80 bg-secondary-dark p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-primary-light hover:scale-105 transition-all flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Weekly Plan</h3>
            <p className="text-4xl font-bold mb-4">$25</p>
            <hr className="border-t border-gray-500 mb-4" />
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>✔️ PRO Gyms</li>
              <li>✔️ Smart workout plan</li>
              <li>✔️ At home workouts</li>
            </ul>
          </div>
          <button className="w-full bg-transparent text-primary-light py-2 px-4 rounded-lg border border-primary-light hover:bg-primary-light hover:text-white transition duration-300 mt-auto">
            Join Now
          </button>
        </div>

        <div className="w-80 bg-secondary-dark p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-primary-light hover:scale-105 transition-all flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
            <p className="text-4xl font-bold mb-4">$45</p>
            <hr className="border-t border-gray-500 mb-4" />
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>✔️ ELITE Gyms & Classes</li>
              <li>✔️ PRO Gyms</li>
              <li>✔️ Smart workout plan</li>
              <li>✔️ At home workouts</li>
              <li>✔️ Personal Training</li>
            </ul>
          </div>
          <button className="w-full bg-transparent text-primary-light py-2 px-4 rounded-lg border border-primary-light hover:bg-primary-light hover:text-white transition duration-300 mt-auto">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
