import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonMain from "./ButtonMain";

function Header() {
  const [navOpen, setNavOpen] = useState(true);

  function handleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <header className="sticky top-0 z-30 h-24 bg-white p-4">
      <div className="container m-auto flex items-center justify-between">
        <div className="relative z-30 max-w-11 md:max-w-16">
          <Link to="/">
            <img src="/images/m2p-logo.png" alt="Logo" />
          </Link>
        </div>

        <nav
          className={`fixed left-0 top-24 z-[1] m-auto h-screen w-full bg-white px-6 py-4 ${navOpen ? "translate-y-0" : "translate-y-[-150%]"} linear transition-all duration-500 lg:static lg:h-auto lg:w-auto lg:translate-y-0`}
        >
          <ul className="lg:text-bold flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-6">
            <li>
              <a
                href="#"
                className="relative text-xl before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-primered before:transition-all before:duration-500 hover:before:origin-right hover:before:scale-x-100"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-xl before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-primered before:transition-all before:duration-500 hover:before:origin-right hover:before:scale-x-100"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-xl before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-primered before:transition-all before:duration-500 hover:before:origin-right hover:before:scale-x-100"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-xl before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-primered before:transition-all before:duration-500 hover:before:origin-right hover:before:scale-x-100"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-xl before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-primered before:transition-all before:duration-500 hover:before:origin-right hover:before:scale-x-100"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <ButtonMain btnTxt="Let's Connect" />

          <button
            className="z-10 flex flex-col items-center justify-center gap-2 lg:hidden"
            onClick={handleNav}
          >
            <span
              className={`${navOpen ? "absolute rotate-45" : ""} h-[2px] w-6 bg-black transition-all duration-300`}
            ></span>
            <span
              className={`${navOpen ? "rotate-[-45deg]" : ""} h-[2px] w-6 bg-black transition-all duration-300`}
            ></span>
            <span
              className={`${navOpen ? "hidden" : ""} h-[2px] w-6 bg-black transition-all duration-300`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
