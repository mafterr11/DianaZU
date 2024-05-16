"use client";

import React from "react";
import MainButton from "../common/MainButton";
import Socials from "../common/Socials";
import { Link } from "react-scroll";
function HeroSection() {
  return (
    <section id="acasa" className="container flex flex-col items-center justify-between gap-16 md:flex-row">
      <div className="">
        <h3 className="text-[24px] font-semibold">Buna, eu sunt</h3>
        <h3 className="text-[34px] font-semibold text-primary">
          Diana Maftei{" "}
        </h3>
        <p className="text-[50px] font-extrabold leading-[4rem] md:text-[70px] md:leading-[6rem]">
          Ilustrator
        </p>
        <p className="text-[50px] font-extrabold leading-[4rem] md:text-[80px] md:leading-[6rem]">
          Background artist
        </p>
        <p className="my-8 max-w-4xl">
          Sunt o artistă vizuală specializată în crearea de fundaluri și
          ilustrații, acum extinzându-mi abilitățile în domeniul designului
          grafic. Pasionată de transformarea ideilor în imagini captivante, mă
          dedic explorării și integrării tehnicilor moderne pentru a produce
          creații vizuale remarcabile.
        </p>
        <div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
          <MainButton text="Angajează-mă" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-[35px]">
        <div className="relative">
          <img src="/hero.png" alt="hero image" />
        </div>
        <Socials />
      </div>
    </section>
  );
}

export default HeroSection;
