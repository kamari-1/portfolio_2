import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <section className="max-container padding-y relative z-50">
      <div className="flex justify-between items-center px-4 md:px-0 border-b border-[#1E2D3D] text-main-light-grey">
        <div className="logo  ">
          <NavLink to="/">
            <h2 className="p-1 pb-2 pr-20 font-extrabold text-xl">
              &lt;CO /&gt;
            </h2>
          </NavLink>
        </div>

        <div className="hidden md:flex flex-1 w-full justify-between ">
          <div className="flex flex-row ">
            <div className="flex flex-row">
              <div className="border-r border-l border-main-grey flex justify-center items-center">
                <NavLink to="/">
                  <p className="pb-2 px-8">Home</p>
                </NavLink>
              </div>
              <div className="logo border-r border-main-grey flex justify-center items-center">
                <NavLink to="/resume">
                  <p className="pb-2 px-8">Experience</p>
                </NavLink>
              </div>
              <div className="border-r border-main-grey flex justify-center items-center">
                <NavLink to="/projects">
                  <p className="pb-2 px-8">My Projects</p>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="border-l border-main-grey">
            <NavLink to="/contact">
              <p className=" pb-2 px-8">Contact me</p>
            </NavLink>
          </div>
        </div>

        <div>
          <ChevronDoubleDownIcon className="h-8 flex md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Nav;
