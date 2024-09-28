import { Bars2Icon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
// import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    setShowMenu(false);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className=" p-4 md:padding-y mb-16  md:top-0 z-50  md:bg-inherit w-full ">
      <div className="max-container flex justify-between w-full items-center px-4 md:px-0 border-b border-[#1E2D3D] text-main-light-grey ">
        <div className="logo  ">
          <NavLink to="/">
            <h2
              className={`p-1 pb-2 pr-20 font-extrabold text-2xl text-light-brown`}
              id="logo"
            >
              &lt; CO /&gt;
            </h2>
          </NavLink>
        </div>

        <div onClick={() => toggleMenu()}>
          <Bars2Icon className="h-8 flex md:hidden" />
        </div>

        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } md:flex flex-1 flex-col md:flex-row w-full absolute md:static top-20 left-0 md:m-0 md:justify-between gap-8 h-svh md:h-auto bg-pink-900 md:bg-inherit`}
        >
          <div className="flex m-auto md:m-0 text-center md:text-inherit">
            <div className="flex flex-col md:flex-row gap-16 md:gap-0">
              <div
                className="md:navLinkMedView md:border-r md:border-l"
                onClick={closeMenu}
              >
                <NavLink to="/">
                  <p className="navLinkText">Home</p>
                </NavLink>
              </div>
              <div
                className="logo md:navLinkMedView md:border-r "
                onClick={closeMenu}
              >
                <NavLink to="/resume">
                  <p className="navLinkText">Experience</p>
                </NavLink>
              </div>
              <div
                className="md:navLinkMedView md:border-r "
                onClick={closeMenu}
              >
                <NavLink to="/projects">
                  <p className="navLinkText">My Projects</p>
                </NavLink>
              </div>
            </div>
          </div>

          <div
            className=" md:border-main-grey md:border-l m-auto md:m-0"
            onClick={closeMenu}
          >
            <NavLink to="/contact">
              <p className="navLinkText">Contact me</p>
            </NavLink>
          </div>
        </div>

        {/* <div onClick={() => toggleMenu()}>
          <Bars2Icon className="h-8 flex md:hidden" />
        </div> */}
      </div>

      {/* {showMenu && (
        <div className="">
          <MobileMenu closeMenu={closeMenu} />
        </div>
      )} */}
    </nav>
  );
};

export default Nav;
