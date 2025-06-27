import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame2Subsection = (): JSX.Element => {
  return (
    <div className="w-full bg-[linear-gradient(52deg,rgba(4,60,109,1)_0%,rgba(8,116,211,1)_100%)] flex items-center gap-2.5 px-6 py-[60px] relative overflow-hidden md:px-[120px]">
      {/* Decorative circles */}
      <div className="absolute w-[424px] h-[424px] top-[-220px] right-[120px] bg-[#ffffff33] rounded-[212px]" />
      <div className="absolute w-[504px] h-[204px] top-60 right-[60px] bg-[#ffffff33] rounded-[212px]" />

      {/* Background image container */}
      <div className="absolute w-full h-[905px] top-[-254px] left-0">
        <div className="relative h-[905px]">
          <img
            className="absolute w-full h-96 top-[254px] left-0"
            alt="Background pattern"
          />
        </div>
      </div>

      {/* Content card */}
      <Card className="bg-transparent border-0 shadow-none w-full md:w-[600px] relative z-10">
        <CardContent className="flex flex-col items-start gap-5 p-0">
          <h2 className="font-normal text-white text-3xl md:text-[40px] tracking-[-0.40px] leading-[52px] font-['Mulish',Helvetica]">
            Your Dream Home Awaits <br />
            this Festive Season
          </h2>

          <div className="flex flex-col items-start gap-8 w-full">
            <p className="font-normal text-[#ffffffcc] text-lg md:text-xl tracking-[0] leading-7 font-['Mulish',Helvetica]">
              The perfect time to turn dreams into addresses is here. Own your
              dream home this festive season &amp; create memories.
            </p>

            <Button className="h-[52px] rounded-lg bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)] text-white text-lg tracking-[-0.18px] leading-[21.6px] font-bold font-['Mulish',Helvetica]">
              Explore More
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feature image */}
      <img
        className="absolute w-[363px] h-[362px] top-[22px] right-[120px] hidden md:block"
        alt="Dream home illustration"
      />
    </div>
  );
};
