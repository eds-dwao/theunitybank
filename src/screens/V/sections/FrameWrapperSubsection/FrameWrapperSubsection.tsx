import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperSubsection = (): JSX.Element => {
  // Card data for mapping
  const cards = [
    {
      title: "Quick Loan\nProcessing",
      description: "Get a loan with the help of our in-house local expert.",
    },
    {
      title: "Easy Home Loan \nEligibility Norms",
      description: "Easy financing, even without formal income proof.",
    },
    {
      title: "Wide Product\nRange",
      description: "Get a loan with the help of our in-house local expert.",
    },
    {
      title: "Wide Reach, Constant Care",
      description:
        "Help is just around the corner at any of our 215+ branches.",
    },
  ];

  // Pagination indicators
  const indicators = [
    { active: true, width: "w-9" },
    { active: false, width: "w-2" },
    { active: false, width: "w-2" },
    { active: false, width: "w-2" },
    { active: false, width: "w-2" },
  ];

  return (
    <section className="flex flex-col items-center gap-10 px-[100px] py-[60px] relative bg-[#ecf5fb] overflow-hidden">
      <div className="flex flex-col w-[1240px] h-20 items-start gap-4 relative">
        <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Mulish',Helvetica] font-bold text-[#ea6024] text-base tracking-[1.60px] leading-[19.2px] whitespace-nowrap">
            WHY US
          </h3>
        </div>

        <div className="flex w-[1240px] items-center justify-between relative flex-1 grow">
          <h2 className="relative self-stretch w-[1240px] mt-[-1.00px] [font-family:'Mulish',Helvetica] font-normal text-[#111111] text-[40px] tracking-[-0.40px] leading-[48.0px] whitespace-nowrap">
            Why choose ICICI Home Finance?
          </h2>

          <Button className="flex w-[204px] h-[52px] items-center justify-center gap-2.5 px-6 py-4 relative ml-[-204px] rounded-lg overflow-hidden bg-[linear-gradient(52deg,rgba(4,60,109,1)_0%,rgba(8,116,211,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] [font-family:'Mulish',Helvetica] font-bold text-[#ffffff] text-lg tracking-[0] leading-[18px]">
            Apply Now
          </Button>
        </div>
      </div>

      <div className="absolute w-[1500px] h-[1000px] top-[-166px] left-[-30px] -rotate-180 opacity-[0.06]">
        <img
          className="absolute w-[1440px] h-[668px] top-[166px] left-[30px] rotate-180"
          alt="Clip path group"
        />
      </div>

      <div className="flex flex-col items-start gap-11 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start gap-10 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll">
          {cards.map((card, index) => (
            <Card
              key={`card-${index}`}
              className="flex flex-col h-[340px] items-center p-6 relative flex-1 grow rounded-xl overflow-hidden bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)] border-none"
            >
              <CardContent className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto] p-0">
                <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Mulish',Helvetica] font-bold text-[#ffffff] text-2xl text-center tracking-[-0.24px] leading-[28.8px] whitespace-pre-line">
                  {card.title}
                </h4>
                <p className="relative self-stretch opacity-80 [font-family:'Mulish',Helvetica] font-normal text-[#ffffff] text-base text-center tracking-[0] leading-5">
                  {card.description}
                </p>
              </CardContent>
              <img
                className="absolute w-[280px] h-[181px] top-[174px] left-px"
                alt="Feature illustration"
              />
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
          <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
            {indicators.map((indicator, index) => (
              <div
                key={`indicator-${index}`}
                className={`relative ${indicator.width} h-2 bg-[#ea6024] rounded ${!indicator.active ? "opacity-40" : ""}`}
              />
            ))}
          </div>

          <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
            <Button
              variant="outline"
              className="relative w-11 h-11 rounded border-[none] p-0 flex items-center justify-center"
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
            </Button>

            <Button className="relative w-11 h-11 rounded bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)] p-0 flex items-center justify-center">
              <ChevronRightIcon className="h-3.5 w-3.5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
