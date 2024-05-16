import React from "react";
import Header from "../common/Header";
import {
  Calendar,
  GraduationCap,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Diana Maftei",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+40.724.411.148",
  },
  {
    icon: <MailIcon size={20} />,
    text: "mafteidiana39@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "03 Sep, 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Universitatea Nationala de Arte Bucuresti",
  },
];

function NewsletterSection() {
  return (
    <section id="contact" className="my-20">
      <div className="flex flex-col xl:flex-row items-start md:items-center justify-evenly gap-y-12">
        <div className="max-w-xl text-center xl:text-left">
          <p className="mb-10  text-2xl font-semibold leading-snug md:text-[55px]">
            Hai să proiectăm împreună
          </p>
          <p className="text-[21px]">
            Nu ezitați să mă contactați pentru orice întrebări sau colaborări
          </p>
        </div>

        <div className="mb-12 grid gap-x-4 gap-y-8 xl:grid-cols-1">
          {infoData.map((item, index) => {
            return (
              <div
                className="mx-auto flex items-center gap-x-4 xl:mx-0"
                key={index}
              >
                <div className="text-accent">{item.icon}</div>
                <p className="text-center xl:text-left">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
