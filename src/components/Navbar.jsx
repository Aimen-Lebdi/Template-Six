import { useState } from "react";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between items-center py-6 w-full">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="sm:flex justify-end items-start flex-1 hidden list-none ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-poppins font-normal ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } cursor-pointer text-white`}
          >
            <a href={` #${nav.id} `}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain "
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient min-w-[140px] mx-4 my-2 absolute right-0 top-20 rounded-xl sidebar `}
        >
          <ul className="flex justify-end items-center flex-1  list-none flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-poppins font-normal ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-10"
                } cursor-pointer text-white `}
              >
                <a href={` #${nav.id} `}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
