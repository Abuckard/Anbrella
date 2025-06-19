import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import BackgroundTest from './components/BackgroundTest';
import { Menu, X } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClasses = "font-medium text-lg transition-colors duration-300";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-300 relative">
      {/* Bakgrunds-animation */}
      <BackgroundTest />

      <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-white">Anbrella</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <NavLink to="/" className={({ isActive }) => `${linkClasses} ${isActive ? 'text-emerald-300 underline' : 'text-white hover:text-emerald-300'}`}>Hem</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => `${linkClasses} ${isActive ? 'text-emerald-300 underline' : 'text-white hover:text-emerald-300'}`}>Portfolio</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${linkClasses} ${isActive ? 'text-emerald-300 underline' : 'text-white hover:text-emerald-300'}`}>Kontakt</NavLink>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={32} color="white" /> : <Menu size={32} color="white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => `${linkClasses} ${isActive ? 'text-emerald-300 underline' : 'text-white hover:text-emerald-300'}`}>Hem</NavLink>
            <NavLink to="/portfolio" onClick={() => setMenuOpen(false)} className={({ isActive }) => `${linkClasses} ${isActive ? 'text-emerald-300 underline' : 'text-white hover:text-emerald-300'}`}>Portfolio</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => `${linkClasses} ${isActive ? 'text-emerald-300 underline' : 'text-white hover:text-emerald-300'}`}>Kontakt</NavLink>
          </div>
        )}
      </nav>

      <div className="flex flex-col items-center justify-start py-10 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
