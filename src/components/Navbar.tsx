import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Users, Bell, Menu, X } from 'lucide-react';
import { Contents } from '../content';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { personaldetails } = Contents;

  const navItems = [
    { to: '/', icon: <Home size={22} />, label: 'Home', end: true },
    { to: '/projects', icon: <Briefcase size={22} />, label: 'Projects' },
    { to: '/experience', icon: <Users size={22} />, label: 'Experience' },
    { to: '/contact', icon: <Bell size={22} />, label: 'Contact' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="text-blue-600 font-bold text-2xl cursor-pointer">rp</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs transition-all duration-200 relative ${
                  isActive ? 'text-black font-medium' : 'text-gray-500 hover:text-black'
                }`
              }>
              {({ isActive }) => (
                <>
                  {item.icon}
                  <span className="mt-1">{item.label}</span>

                  {/* Active underline */}
                  {isActive && <span className="absolute -bottom-2 w-full h-[2px] bg-black rounded-full"></span>}
                </>
              )}
            </NavLink>
          ))}

          {/* Profile */}
          <img
            src={personaldetails.avtar}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover border cursor-pointer"
          />
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center gap-6 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex flex-col items-center text-sm ${isActive ? 'text-black font-medium' : 'text-gray-600'}`
                }>
                {item.icon}
                <span className="mt-1">{item.label}</span>
              </NavLink>
            ))}

            <img src={personaldetails.avtar} alt="profile" className="w-10 h-10 rounded-full object-cover border" />
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
