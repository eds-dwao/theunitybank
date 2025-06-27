import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const SectionComponentNodeSubsection = (): JSX.Element => {
  // Data for the promotional cards
  const promotionalCards = [
    {
      title: "Save More, Earn More",
      hasImage: true,
      linkText: "Explore More",
    },
    {
      title: "Refer\nand Earn",
      hasImage: true,
      linkText: "Explore More",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-[60px] py-[60px] px-[100px] bg-white w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="inline-flex items-center justify-center gap-2.5 rounded">
          <span className="font-['Mulish',Helvetica] font-bold text-[#ea6024] text-base tracking-[1.60px] leading-[19.2px]">
            PROMOTIONS
          </span>
        </div>

        <h2 className="font-['Mulish',Helvetica] font-normal text-[#111111] text-[40px] tracking-[-0.40px] leading-[48.0px]">
          Building a Better Financial Future Together
        </h2>
      </div>

      {/* Promotional Content */}
      <div className="flex items-start gap-10 w-full">
        {/* Left Card - Festive Finance Offers */}
        <Card className="flex flex-col h-[593.46px] items-start gap-6 flex-1 rounded-lg overflow-hidden border-none">
          <div className="relative w-full h-[336px] rounded-[6px_6px_0px_0px] overflow-hidden">
            <img
              className="absolute w-[386px] h-[336px] top-0 left-0 object-cover"
              alt="Festive finance offers"
            />
          </div>

          <CardContent className="flex flex-col items-start gap-4 p-6 w-full flex-grow">
            <h3 className="font-['Mulish',Helvetica] font-bold text-[#111111] text-[26px] tracking-[-0.52px] leading-[26px]">
              Festive Finance Offers
            </h3>

            <p className="opacity-90 font-['Mulish',Helvetica] font-normal text-[#111111] text-base leading-6">
              Celebrate with exclusive loan deals, reduced interest rates, and
              zero processing fees this festive season!
            </p>
          </CardContent>

          <CardFooter className="p-6 pt-0 w-full">
            <Button className="w-full h-[54px] bg-[linear-gradient(52deg,rgba(4,60,109,1)_0%,rgba(8,116,211,1)_100%)] rounded-lg backdrop-blur-[2px]">
              <span className="text-white text-lg tracking-[-0.18px] leading-[21.6px] font-['Mulish',Helvetica] font-bold">
                Explore More
              </span>
            </Button>
          </CardFooter>
        </Card>

        {/* Right Column */}
        <div className="flex flex-col items-start gap-6 self-stretch">
          {/* Home Loans Card */}
          <Card className="w-[813px] h-[334px] p-10 relative rounded-lg overflow-hidden border-none">
            <div className="absolute w-[813px] h-[334px] top-0 left-0 rounded-lg backdrop-blur-[6px] bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)]" />

            <div className="absolute w-[842px] h-[561px] top-[-113px] -left-3.5 bg-[100%_100%]" />

            <img
              className="absolute w-[330px] h-96 top-[-50px] left-[439px]"
              alt="Home loan illustration"
            />

            <CardContent className="relative z-10 flex flex-col w-[349px] items-start gap-10 p-0">
              <div className="flex flex-col items-start gap-4 w-full">
                <h3 className="font-['Mulish',Helvetica] font-bold text-white text-[32px] tracking-[-0.64px] leading-8">
                  Celebrate with Easy Home Loans
                </h3>

                <p className="opacity-90 font-['Mulish',Helvetica] font-normal text-white text-base leading-6">
                  This festive season, make your dream home a reality with quick
                  approvals, minimal paperwork, and attractive interest rates.
                </p>
              </div>

              <Button className="h-[54px] bg-[linear-gradient(52deg,rgba(4,60,109,1)_0%,rgba(8,116,211,1)_100%)] rounded-lg backdrop-blur-[2px]">
                <span className="text-white text-lg tracking-[-0.18px] leading-[21.6px] font-['Mulish',Helvetica] font-bold">
                  Explore More
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Bottom Cards */}
          <div className="flex items-start gap-10 w-full">
            {promotionalCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col w-[387px] items-start gap-7 p-6 rounded-lg overflow-hidden border-none"
              >
                <CardContent className="p-0 w-full">
                  <h3 className="font-['Mulish',Helvetica] font-bold text-[#111111] text-[26px] leading-[31.2px] whitespace-pre-line">
                    {card.title}
                  </h3>

                  {card.hasImage && (
                    <img
                      className={`absolute ${index === 0 ? "w-[198px] h-[235px] top-0 left-[189px]" : "w-[226px] h-[199px] top-9 left-[161px] object-cover"}`}
                      alt={`${card.title} illustration`}
                    />
                  )}

                  <div className="flex items-center gap-1 mt-7 w-full">
                    <span className="font-['Mulish',Helvetica] font-bold text-[#ea6024] text-xl tracking-[-0.20px] leading-[24.0px]">
                      {card.linkText}
                    </span>
                    {index === 0 ? (
                      <img
                        className="w-6 h-6"
                        alt="Arrow right"
                        src="/frame-16.svg"
                      />
                    ) : (
                      <img
                        className="w-6 h-6"
                        alt="Arrow right"
                        src="/frame-16.svg"
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
