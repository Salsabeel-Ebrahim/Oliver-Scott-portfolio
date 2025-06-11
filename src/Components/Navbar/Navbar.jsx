import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 ">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
                          {/* Logo  &  Links */}
          <div className="flex items-center justify-between flex-grow">
            <div className="flex items-center">
              <h1 className="text-white text-xl sm:text-2xl mx-3 sm:mx-0  font-bold">Oliver Scott</h1>  </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="rounded-md px-3 py-2 text-md font-medium text-white">Home</Link>
                <Link to="/about" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:text-white">About</Link>
                <Link to="/portfolio" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:text-white">Portfolio</Link>
                <Link to="/contact" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:text-white">Contact</Link>
              </div>
            </div>
          </div>

                {/* Toggle button for mobile */}
          <div className="sm:hidden  mx-3 sm:mx-0">
 <button  onClick={toggleMenu} className="text-white text-2xl focus:outline-none" aria-label="Toggle menu" >
              <FaBars /> </button>  </div>
        </div>
      </div>

                       { /* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link to="/" className="block rounded-md  px-3 py-2 text-base font-medium text-white">Home</Link>
            <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white">About</Link>
            <Link to="/portfolio" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Portfolio</Link>
            <Link to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
