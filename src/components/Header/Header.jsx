import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const closeNavbar = () => {
    setNavbar(false);
  }
  return (
    <header className="shadow-lg sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-1 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex ">
            <a
              href="https://sites.google.com/view/ggsipuedc"
              target="_blank"
              className="hidden lg:flex items-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/GGSIU_logo.svg/640px-GGSIU_logo.svg.png"
                className="mr-3 h-28"
                alt="Logo"
              />
            </a>
            <Link to="/" className="flex items-center">
              <img
                src="https://www.iiitm.ac.in/images/EBSB/LOGO-EBSB.png"
                className="mr-3 h-28"
                alt="Logo"
              />
              <h1 className="text-xl">
                {" "}
                Ek Bharat <br /> Shreshtha Bharat <br /> GGSIPU - EDC
              </h1>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className ='flex lg:hidden w-7 h-8 ml-5'
                  onClick={() => {setNavbar(!navbar)} }
                  viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
              </div>
            </Link>
          </div>
          <div
            className={`${navbar?"" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 text-xl ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/mission"}
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 text-xl ${
                      isActive ? "text-orange-700 " : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Mission
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"activities"}
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 text-xl ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Activities
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/media"}
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 text-xl ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Media Stream
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 text-xl ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/membership"}
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 text-xl ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Membership
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
