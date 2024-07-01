import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

import "../../App.css";


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    logout().then().catch();
  };

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
        to="/property"
        className={({ isActive }) =>
          isActive ? "text-[#4b85f0] font-bold" : "font-bold "
        }
      >
        Property
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
      <div className="navbar bg-base-100 px-6 py-4 z-10 fixed shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          {user ? (
            <div className="flex items-center justify-center gap-3">
              <div className="navContainer">
                <img
                  className="image w-14 h-14 cursor-pointer"
                  src={user.photoURL}
                  alt="User Profile"
                />
                <div className="overlay">{ user.displayName}</div>
              </div>
              <button
                onClick={handleSignOut}
                className="btn px-8 bg-[#4b85f0] text-white font-semibold text-lg hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
              >
                Log Out
              </button>
            </div>
          ) : (
            <a
              href="/login"
              className="btn px-8 bg-[#4b85f0] text-white font-semibold text-lg hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
            >
              <button>Login</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
