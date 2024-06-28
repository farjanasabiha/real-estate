import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navbar = (
      <>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#4b85f0] font-bold" : "font-bold "
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/updateProfile"
          className={({ isActive }) =>
            isActive ? "text-[#4b85f0] font-bold" : "font-bold "
          }
        >
          Update Profile
        </NavLink>
      </>
    );
    return (
      <div className="h-20">
        <div className="navbar bg-base-100 px-6 py-4 z-10 fixed ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  text-lg font-medium gap-5"
              >
                {navbar}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">
              Home<span className="text-[#4b85f0]">Press</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-lg font-medium gap-5 px-1">
              {navbar}
            </ul>
          </div>
          <div className="navbar-end ">
            <a className="btn px-8 bg-[#4b85f0] text-white font-semibold text-lg">
              Login
            </a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;