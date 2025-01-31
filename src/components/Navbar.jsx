import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
  const toggleNavbar = () => {
    setmobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">Brickerzclub</span>
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((nav, index) => {
              return (
                <li className="" key={index}>
                  <a href={nav.href} className="">
                    {nav.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            
            <a
              href="#Contact"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Reach Out
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="" onClick={toggleNavbar}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="">
              {navItems.map((nav, index) => {
                return (
                  <li className="py-2 text-center" key={index}>
                    <a href={nav.href} className="">
                      {nav.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="py-4 flex justify-center space-x-6 items-center">
              
              <a
                href="#Contact"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Reach Out
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
