import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div className="w-full py-24 text-white text-center ">
    <h1 className="text-5xl font-extrabold mb-6">Anbrella Consulting</h1>
    <p className="text-xl mb-10">Professionell projektledning & webbutveckling</p>
    <div className="flex justify-center gap-6">
      <Link to="/portfolio">
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-200 transition">Se Portfolio</button>
      </Link>
      <Link to="/contact">
        <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition">Kontakta oss</button>
      </Link>
    </div>
  </div>
);

export default Home;