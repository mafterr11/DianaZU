import React from "react";
import Socials from "../common/Socials";
import LinkScroll from "next/link";
import { Link } from "react-scroll";

function FooterSection() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex w-full flex-col items-center bg-[#F8F8F8] md:px-20">
      <div className="flex w-full flex-col items-center justify-between py-6 md:flex-row">
        <Link to="acasa" spy={true} smooth={true} offset={-130} duration={500}>
          <h2>
            DIANA<span className=" align-super text-primary">ZU</span>
          </h2>
        </Link>
        <div className="flex w-full justify-center py-4  md:text-[16px]">
          <LinkScroll
            href="https://myriad-tech.ro"
            className="px-2 text-primary transition-all duration-500 ease-in-out hover:scale-[1.05] hover:font-medium"
          >
            {" "}
            Myriad Tech
          </LinkScroll>
          © {currentYear} All Rights Reserved
        </div>
        <Socials />
      </div>
    </section>
  );
}

export default FooterSection;
