import React from "react";
import Socials from "../common/Socials";
import Link from "next/link";

function FooterSection() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex w-full flex-col items-center bg-[#F8F8F8] md:px-20">
      <div className="flex flex-col md:flex-row w-full items-center justify-between py-6">
        <h2>
          DIANA<span className=" align-super text-primary">ZU</span>
        </h2>
        <div className="flex w-full justify-center py-4  md:text-[18px]">
          <Link href="https://myriad-tech.ro" className="px-2 text-primary">
            {" "}
            Myriad Tech
          </Link>
          © {currentYear}{" "}
          All Rights Reserved
        </div>
        <Socials />
      </div>
    </section>
  );
}

export default FooterSection;
