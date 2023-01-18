import { useContext, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { ThemeContext } from "../context/themeContext";
import ChangeThemeButton from "./ChangeThemeButton";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src={logo}
        alt="hoobank"
        className="w-[124px] h-[32px] bg-primary rounded-full p-0.5"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <ChangeThemeButton />
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${active === nav.title ? "text-white" : "text-dimWhite"} 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            ${theme ? "text-white" : "text-primary"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[40px] h-[40px] object-contain bg-primary p-2 "
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <ChangeThemeButton />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
