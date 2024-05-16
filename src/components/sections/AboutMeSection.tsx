import React from "react";
import { Progress } from "@/components/ui/progress";

function ProgressBar({ title, percent }: { title: string; percent: number }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[20px] font-semibold">{title}</p>
      <Progress value={percent} className="h-[12px] w-full md:w-[60%] bg-[#EDECEC]" />
    </div>
  );
}

function AboutMeSection() {
  return (
    <section id="despre" className="my-12 flex flex-col items-center justify-between gap-8 xl:flex-row">
      <div className="xl:w-[40%]">
        <img src="/about.png" alt="profile" className="rounded-[10%]"/>
      </div>
      <div className="xl:w-[50%] text-center md:text-left">
        <p className="text-2xl font-bold leading-[3.5rem] md:text-[65px]">
          Despre mine
        </p>
        <p className="my-8 text-balance">
          Munca mea artistică reflectă o combinație de pasiune și dedicare
          pentru crearea de fundaluri și ilustrații remarcabile. Pe măsură ce
          învăț și evoluez în designul grafic, îmi propun să aduc la viață
          imagini care să încânte și să inspire, integrând mereu noile mele
          cunoștințe și abilități în fiecare proiect.
        </p>
        <div className="flex flex-col gap-4">
          <ProgressBar title="Background artist" percent={97} />
          <ProgressBar title="Ilustrator" percent={95} />
          <ProgressBar title="Design grafic " percent={97} />
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
