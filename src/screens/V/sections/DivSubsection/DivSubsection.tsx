import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivSubsection = (): JSX.Element => {
  return (
    <section className="self-stretch w-full bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)] flex items-center gap-2.5 px-[120px] py-[60px] relative overflow-hidden">
      <div className="absolute w-[1440px] h-[905px] top-[-254px] left-0">
        <div className="relative h-[905px]">
          <img
            className="absolute w-[1440px] h-96 top-[254px] left-0"
            alt="Clip path group"
          />
        </div>
      </div>

      <Card className="flex-col w-[600px] items-start gap-5 flex relative bg-transparent border-0 shadow-none">
        <CardContent className="p-0 space-y-5">
          <h2 className="relative self-stretch mt-[-1.00px] font-['Mulish',Helvetica] font-normal text-white text-[40px] tracking-[-0.40px] leading-[52px]">
            GET ₹2.67 LAKH SUBSIDY
            <br />
            WITH PMAY URBAN 2.0
          </h2>

          <div className="flex-col items-start gap-8 self-stretch w-full flex relative">
            <p className="relative self-stretch mt-[-1.00px] font-['Mulish',Helvetica] font-normal text-[#ffffffcc] text-xl tracking-[0] leading-7">
              Stop waiting, start owning! Avail PMAY subsidy and reduce your
              home loan burden. Apply now for an affordable future.
            </p>

            <Button className="w-[174px] h-[52px] rounded-lg bg-[linear-gradient(52deg,rgba(4,60,109,1)_0%,rgba(8,116,211,1)_100%)] hover:bg-[linear-gradient(52deg,rgba(4,60,109,0.9)_0%,rgba(8,116,211,0.9)_100%)] text-white text-lg tracking-[-0.18px] leading-[21.6px] font-['Mulish',Helvetica] font-bold">
              Explore More
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="absolute w-[424px] h-[424px] top-[-220px] left-[927px] bg-[#ffffff33] rounded-[212px]" />

      <div className="absolute w-[504px] h-[204px] top-60 left-[887px] bg-[#ffffff33] rounded-[212px]" />

      <img
        className="absolute w-[514px] h-96 top-0 left-[849px] object-cover"
        alt="Image"
      />
    </section>
  );
};
