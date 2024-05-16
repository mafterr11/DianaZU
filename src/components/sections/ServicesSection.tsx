import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServicesSection() {
  const data = [
    {
      iconUrl: "/images/ui_icon.png",
      title: "Background artist",
      description: "Ca background artist, creez fundaluri detaliate care adaugă profunzime și context vizual oricărui proiect.",
    },
    {
      iconUrl: "/images/web_icon.png",
      title: "Ilustrator",
      description: "În calitate de ilustrator, aduc la viață idei prin imagini unice și captivante, pline de expresivitate.",
    },
    {
      iconUrl: "/images/app_icon.png",
      title: "Grafic design",
      description: "Pasionată de grafic design, combin creativitatea cu tehnologia pentru a realiza proiecte vizuale impresionante, cu servicii mai avansate disponibile în curând.",
    },
  ];
  return (
    <section id="servicii" className="my-12">
      <Header title="Services" description="Creez ilustrații și fundaluri unice, cu design grafic avansat disponibil în curând."/>

      <div className="mt-[59px] grid grid-cols-1 gap-[31px] md:grid-cols-2 lg:grid-cols-3 container">
        {data.map((service, index) => (
          <ServiceCard {...service} key={index} description={service.description} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
