"use client";

import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import MainButton from "./MainButton";
import { Link } from "react-scroll";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const links = [
    {
      name: "Acasa",
      link: "acasa",
      offset: -130,
      mobileOffset: -100,
    },
    {
      name: "Despre mine",
      link: "despre",
      offset: -130,
      mobileOffset: -100,
    },
    {
      name: "Servicii",
      link: "servicii",
      offset: -130,
      mobileOffset: -100,
    },
    {
      name: "Proiecte",
      link: "proiecte",
      offset: -130,
      mobileOffset: -100,
    },
    {
      name: "Contact",
      link: "contact",
      offset: 0,
      mobileOffset: -100,
    },
  ];

  return (
    <div className="z-20 border-b   border-gray-300 md:sticky md:top-0 md:shadow-none">
      {/* DESKTOP */}
      <div className=" hidden bg-white p-4 animate-in fade-in zoom-in lg:block">
        <div className="mx-[41px] flex items-center justify-between">
          <h2>
            DIANA<span className=" align-super text-primary">ZU</span>
          </h2>
          <div className="flex select-none items-center gap-[20px] text-[16px] xl:gap-[50px]">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                className={`text-gray flex cursor-pointer items-center gap-2  font-[500] hover:text-primary`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex select-none items-center gap-[40px]">
            <MainButton text="Download CV" classes="w-[188px]" />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` fixed top-0 z-[999]  block w-full bg-white py-4 shadow-sm animate-in fade-in zoom-in lg:hidden  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="mx-[10px] flex justify-between">
          <h2>
            DIANA<span className=" align-super text-primary">ZU</span>
          </h2>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer text-black animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            ) : (
              <MenuIcon
                onClick={toggleMenu}
                className="cursor-pointer animate-in fade-in zoom-in"
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col select-none items-center gap-[20px] text-[16px] xl:gap-[50px]">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={link.mobileOffset}
                  duration={500}
                  className={`text-gray flex cursor-pointer items-center gap-2  font-[500] hover:text-primary`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
