import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";

function NewsletterSection() {
  return (
    <section id="contact" className="my-20">
      <div className="flex flex-col items-center justify-center gap-y-6">
        <Header
          title="Hai să proiectăm împreună"
          description="Nu ezitați să mă contactați pentru orice întrebări sau colaborări"
        />
        <MainButton text="Contact Me" classes="w-[222px]" />
      </div>
    </section>
  );
}

export default NewsletterSection;
