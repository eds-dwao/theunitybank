import { InfoIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const DesktopSubsection = (): JSX.Element => {
  // Slider tick marks data
  const loanAmountTicks = [
    { value: "3L", position: "left-px" },
    { value: "50L", position: "left-[140px]" },
    { value: "1Cr", position: "left-[294px]" },
    { value: "50Cr", position: "left-[438px]" },
    { value: "75Cr", position: "left-[570px]" },
  ];

  const tenureTicks = [
    { value: "60M", position: "left-0" },
    { value: "120M", position: "left-[134px]" },
    { value: "180M", position: "left-[284px]" },
    { value: "240M", position: "left-[435px]" },
    { value: "300M", position: "left-[568px]" },
  ];

  return (
    <section className="flex flex-col items-start justify-center gap-10 px-[100px] py-20 bg-[#ffffff]">
      <div className="flex flex-col w-full items-start gap-4">
        <div className="inline-flex items-center justify-center gap-2.5 relative rounded">
          <div className="w-fit mt-[-1.00px] font-bold text-[#ea6024] text-base tracking-[1.60px] leading-[19.2px] whitespace-nowrap [font-family:'Mulish',Helvetica]">
            HOME LOAN CALCULATORS
          </div>
        </div>

        <h2 className="w-full [font-family:'Mulish',Helvetica] font-normal text-[#111111] text-[40px] tracking-[-0.40px] leading-[48.0px]">
          Estimate Home Loan in Minutes
        </h2>
      </div>

      <div className="flex items-start gap-[146px] w-full">
        <div className="flex flex-col w-[600px] items-start gap-11">
          <Tabs defaultValue="emi" className="w-full">
            <TabsList className="h-[52px] p-1 w-full bg-[#ffffff] rounded-[60px] border border-solid border-[#1111111f]">
              <TabsTrigger
                value="emi"
                className="flex-1 h-full rounded-[60px] data-[state=active]:bg-[linear-gradient(52deg,rgba(4,60,109,1)_0%,rgba(8,116,211,1)_100%)] data-[state=active]:text-[#ffffff] data-[state=inactive]:text-[#111111] font-bold text-lg [font-family:'Mulish',Helvetica]"
              >
                EMI Calculator
              </TabsTrigger>
              <TabsTrigger
                value="eligibility"
                className="flex-1 h-full rounded-[60px] data-[state=active]:bg-[linear-gradient(52deg,rgba(4,60,109,1)_0%,rgba(8,116,211,1)_100%)] data-[state=active]:text-[#ffffff] data-[state=inactive]:text-[#111111] font-bold text-lg [font-family:'Mulish',Helvetica]"
              >
                Check Eligibility
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex-col items-start gap-8 w-full flex">
            {/* Home Loan Amount Section */}
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="items-center justify-between w-full flex">
                <div className="w-fit font-bold text-[#111111] text-xl tracking-[-0.20px] leading-[24.0px] [font-family:'Mulish',Helvetica]">
                  Home Loan Amount
                </div>

                <div className="inline-flex h-[52px] items-center gap-3 px-5 py-0 bg-[#ffffff] rounded-[40px] border border-solid border-[#1111111f] relative">
                  <div className="inline-flex flex-col items-center justify-center gap-2.5 self-stretch">
                    <div className="w-fit font-semibold text-[#111111] text-lg tracking-[0] leading-[25.2px] [font-family:'Mulish',Helvetica]">
                      ₹
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                    <div className="w-[85px] font-extrabold text-[#111111] text-lg tracking-[0] leading-[25.2px] [font-family:'Mulish',Helvetica]">
                      20,00,000
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center gap-2.5 px-1 py-0 absolute top-[47px] left-10 bg-[#ffffff]">
                    <div className="w-fit mt-[-1.00px] opacity-40 font-extrabold text-xs tracking-[0] leading-[16.8px] [font-family:'Mulish',Helvetica] text-[#111111]">
                      20 LAKHS
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                <div className="relative w-[600px] h-7">
                  <div className="relative h-7">
                    <div className="flex w-[600px] items-center justify-between absolute top-3.5 left-0">
                      {Array(9)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            key={`tick-${index}`}
                            className="relative w-px h-1 bg-[#1111111f]"
                          />
                        ))}
                    </div>

                    <div className="absolute w-[600px] h-0.5 top-3.5 left-0 bg-[#e2e2e2]" />

                    <div className="absolute w-[86px] h-7 top-0 left-0">
                      <div className="relative h-7">
                        <div className="absolute w-12 h-0.5 top-3.5 left-0 bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)]" />

                        <div className="inline-flex items-center gap-1.5 px-0 py-0.5 absolute top-0 left-8 rounded-[40px] overflow-hidden shadow-[0px_4px_8px_#1111110f] bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)]">
                          <img
                            className="relative w-6 h-6"
                            alt="Frame"
                            src="/frame-11.svg"
                          />

                          <img
                            className="relative w-6 h-6"
                            alt="Frame"
                            src="/frame-4.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-2.5">
                  {loanAmountTicks.map((tick, index) => (
                    <div
                      key={`amount-tick-${index}`}
                      className={`absolute -top-px ${tick.position} opacity-60 [font-family:'Mulish',Helvetica] font-semibold text-[#111111] text-xs tracking-[0] leading-[16.8px] whitespace-nowrap ${index > 0 && index < 4 ? "text-center" : index === 4 ? "text-right" : ""}`}
                    >
                      {tick.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Loan Tenure Section */}
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="items-center justify-between w-full flex">
                <div className="w-fit font-bold text-[#111111] text-xl tracking-[-0.20px] leading-[24.0px] [font-family:'Mulish',Helvetica]">
                  Loan Tenure
                </div>

                <div className="inline-flex h-[52px] items-center gap-3 px-5 py-0 bg-[#ffffff] rounded-[40px] border border-solid border-[#1111111f] relative">
                  <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                    <div className="w-[33px] font-extrabold text-[#111111] text-lg leading-[25.2px] [font-family:'Mulish',Helvetica] tracking-[0]">
                      180
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-center justify-center gap-2.5 self-stretch">
                    <div className="w-fit font-semibold text-[#111111] text-lg tracking-[0] leading-[25.2px] [font-family:'Mulish',Helvetica]">
                      Months
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center gap-2.5 px-1 py-0 absolute top-[47px] left-10 bg-[#ffffff]">
                    <div className="w-fit mt-[-1.00px] opacity-40 font-extrabold text-xs tracking-[0] leading-[16.8px] [font-family:'Mulish',Helvetica] text-[#111111]">
                      15 YEARS
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                <div className="relative w-[600px] h-7">
                  <div className="relative h-7">
                    <div className="flex w-[600px] items-center justify-between absolute top-3.5 left-0">
                      {Array(9)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            key={`tenure-tick-${index}`}
                            className="relative w-px h-1 bg-[#1111111f]"
                          />
                        ))}
                    </div>

                    <div className="absolute w-[600px] h-0.5 top-3.5 left-0 bg-[#e2e2e2]" />

                    <div className="absolute w-[328px] h-7 top-0 left-0">
                      <div className="relative h-7">
                        <div className="absolute w-[301px] h-0.5 top-3.5 left-0 bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)]" />

                        <div className="inline-flex items-center gap-1.5 px-0 py-0.5 absolute top-0 left-[274px] rounded-[40px] overflow-hidden shadow-[0px_4px_8px_#1111110f] bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)]">
                          <img
                            className="relative w-6 h-6"
                            alt="Frame"
                            src="/frame-11.svg"
                          />

                          <img
                            className="relative w-6 h-6"
                            alt="Frame"
                            src="/frame-4.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-2.5">
                  {tenureTicks.map((tick, index) => (
                    <div
                      key={`tenure-label-${index}`}
                      className={`absolute -top-px ${tick.position} opacity-60 [font-family:'Mulish',Helvetica] font-semibold text-[#111111] text-xs tracking-[0] leading-[16.8px] whitespace-nowrap ${index > 0 && index < 4 ? "text-center" : index === 4 ? "text-right" : ""}`}
                    >
                      {tick.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rate of Interest Section */}
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="items-center justify-between w-full flex">
                <div className="w-fit font-bold text-[#111111] text-xl tracking-[-0.20px] leading-[24.0px] [font-family:'Mulish',Helvetica]">
                  Rate of Interest ( Per Annum )
                </div>

                <div className="h-[52px] items-center gap-3 px-5 py-0 bg-[#ffffff] rounded-[40px] border border-solid border-[#1111111f] inline-flex">
                  <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                    <div className="w-fit font-extrabold text-[#111111] text-lg tracking-[0] leading-[25.2px] [font-family:'Mulish',Helvetica]">
                      8.01
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-center justify-center gap-2.5 self-stretch">
                    <div className="w-fit font-semibold text-[#111111] text-lg tracking-[0] leading-[25.2px] [font-family:'Mulish',Helvetica]">
                      %
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="flex-1 rounded-xl overflow-hidden bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)] border-none">
          <div className="absolute w-[506px] h-[337px] top-[168px] -left-1.5">
            <div className="relative h-[337px]">
              <img
                className="absolute w-[494px] h-[280px] top-0 left-1.5"
                alt="Clip path group"
              />
            </div>
          </div>

          <CardContent className="p-0">
            <div className="flex flex-col w-full bg-[#fff6f2]">
              <div className="flex flex-col items-start gap-2 px-8 py-6 w-full">
                <div className="self-stretch mt-[-1.00px] [font-family:'Mulish',Helvetica] font-semibold text-[#111111] text-base tracking-[0] leading-[22.4px]">
                  Your EMI
                </div>

                <div className="w-fit [font-family:'Mulish',Helvetica] font-normal text-[#ea6024] text-4xl tracking-[-0.36px] leading-[43.2px]">
                  ₹ 2,346 / Month
                </div>
              </div>

              <Separator className="bg-[#d9d9d9]" />

              <div className="flex items-start gap-5 px-8 py-6 w-full">
                <div className="flex-col items-start gap-2 flex-1 flex">
                  <div className="self-stretch mt-[-1.00px] [font-family:'Mulish',Helvetica] font-semibold text-[#111111] text-base tracking-[0] leading-[22.4px]">
                    Repayment Amount
                  </div>

                  <div className="self-stretch font-normal text-[#ea6024] text-2xl tracking-[-0.24px] leading-[28.8px] [font-family:'Mulish',Helvetica]">
                    ₹ 20,00,000
                  </div>
                </div>

                <div className="flex-col items-start gap-2 flex-1 flex">
                  <div className="self-stretch mt-[-1.00px] [font-family:'Mulish',Helvetica] font-semibold text-[#111111] text-base tracking-[0] leading-[22.4px]">
                    Interest Amount
                  </div>

                  <div className="self-stretch font-normal text-[#ea6024] text-2xl tracking-[-0.24px] leading-[28.8px] [font-family:'Mulish',Helvetica]">
                    ₹ 7,34,000
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-11 p-8 w-full">
              <div className="flex items-start gap-2.5 w-full">
                <InfoIcon className="w-[26px] h-[26px] text-white" />
                <div className="flex-1 mt-[-1.00px] [font-family:'Mulish',Helvetica] font-semibold text-[#ffffff] text-lg tracking-[0] leading-[25.2px]">
                  Calculated values are for reference only. Exact figures depend
                  on your full financial profile.
                </div>
              </div>

              <div className="flex items-start gap-6 w-full">
                <Button className="flex-1 h-[52px] rounded-lg bg-[linear-gradient(52deg,rgba(4,60,109,1)_0%,rgba(8,116,211,1)_100%)] [font-family:'Mulish',Helvetica] font-bold text-lg">
                  Apply Now
                </Button>

                <Button
                  variant="outline"
                  className="h-[52px] px-8 rounded-lg border-[#65000466] [font-family:'Mulish',Helvetica] font-bold text-[#043c6d] text-lg tracking-[-0.18px] leading-[21.6px] bg-white backdrop-blur-[2px]"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
