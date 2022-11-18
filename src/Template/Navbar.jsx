import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [dis, sd] = useState(false);


  return (
    <div
      id="Navbar"
      className="border-0 border-gray-300 border-b-2 md:space-y-0 p-3 flex-wrap flex items-center justify-around "
    >
      <img className="w-28" id="logoImg" src="image2.png" alt="" />

      <div className = {dis ? "flex" : "hidden sm:block"}>
        <ul
          className="transition-all duration-1000 ease-in-out text-center flex bg-white gap-y-10 h-full fixed p-11 z-10 right-0 top-0 font-medium flex-col sm:flex-row sm:gap-20 sm:relative sm:p-0"
        >
          <NavLink className= { window.location.pathname === "/" ? "text-base opacity-70 border-0 border-violet-700 border-b-2" :  "text-base opacity-70"} to="/">
            Home
          </NavLink>
          <NavLink className= { window.location.pathname === "/products" ? "text-base opacity-70 border-0 border-violet-700 border-b-2" :  "text-base opacity-70"} to="/products">
            Products
          </NavLink>
          <NavLink className= { window.location.pathname === "/about" ? "text-base opacity-70 border-0 border-violet-700 border-b-2" :  "text-base opacity-70"} to="/about">
            About us
          </NavLink>
          {dis && (
            <div onClick={() => sd(false)} className="text-xl cursor-pointer">
              Close <CloseIcon />
            </div>
          )}
        </ul>
      </div>

      {/* <div className="flex items-center justify-center gap-x-6">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-bag-shopping"></i>
        <img
          className="w-7 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
        />
      </div> */}

      <div className="mt-0 cursor-pointer grid place-items-center sm:hidden">
        {!dis && <MenuIcon onClick={() => sd(true)} />}
      </div>
    </div>
  );
};

export default Navbar;
