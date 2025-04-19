import { opportunities, OpportunityType } from "@/services/data/opportunities";
import React from "react";

export default function Opportunities(): React.ReactNode {
  return (
    <section className="w-full flex justify-center items-center [padding-top:max(6vw,_75px)!important] [padding-bottom:max(6vw,_75px)!important] bg-[#FBFDFF]">
      <div className="w-full max-w-mx flex flex-col gap-[4.4375em] items-center">
        <h2 className="text-[4.4375em]/[130%] text-black font-medium max-w-[20ch] text-center">
          Explore the Opportunities We Offer
        </h2>
        <div className="w-full max-w-mx grid grid-cols-2 gap-12">
          {opportunities.map((opportunity) => {
            return (
              <Opportunity
                key={opportunity.title}
                opportunity={opportunity as OpportunityType}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Opportunity({ opportunity }: { opportunity: OpportunityType }) {
  return (
    <div className="w-full h-auto [padding:2em!important] bg-white flex flex-col gap-4 rounded-[7px]">
      <div
        className={`bg-${opportunity.color} w-[85px] h-[85px] flex justify-center items-center rounded-[5px] text-6xl`}
      >
        {opportunity.icon}
      </div>
      <div className="flex flex-col gap-[0.2em]">
        <p className={`text-${opportunity.color} text-[15px]`}>
          {opportunity.subtitle}
        </p>
        <div className="flex flex-col">
          <h3 className="text-black text-[1.6em]">{opportunity.title}</h3>
          <p className="text-black-80">{opportunity.text}</p>
        </div>
      </div>
    </div>
  );
}
