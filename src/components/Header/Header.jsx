import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-lg sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-1 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex ">
            <a
              href="https://sites.google.com/view/ggsipuedc"
              target="_blank"
              className="flex items-center"
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
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
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
