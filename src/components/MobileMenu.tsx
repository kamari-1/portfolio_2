// import { Bars2Icon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

// const toggleMenu = () => {};

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="md:hidden w-full h-svh absolute top-16 left-0 right-0 pt-10 items-center backdrop-blur-3xl overflow-y-hidden text-2xl z-50">
      {/* <Bars2Icon className="h-8 flex md:hidden" onClick={() => toggleMenu} /> */}

      <ul className="flex flex-col items-center gap-20">
        <li onClick={closeMenu}>
          <NavLink to="/">
            <p className=" px-8">Home</p>
          </NavLink>
        </li>
        <li onClick={closeMenu}>
          <NavLink to="/resume">
            <p className=" px-8">Experience</p>
          </NavLink>
        </li>
        <li onClick={closeMenu}>
          <NavLink to="/projects">
            <p className=" px-8">My Projects</p>
          </NavLink>
        </li>
        <li onClick={closeMenu}>
          <NavLink to="/contact">
            <p className=" px-8">Contact me</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
