import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";

export const FrameSubsection = (): JSX.Element => {
  // Banner features data
  const homeLoanFeatures = [
    "Dedicated claim support for family Free.",
    "Upto 10% Discount for buying online.",
    "Only certified experts will call you on 100% recorded lines.",
  ];

  const fdFeatures = [
    "Highest safety ratings.",
    "Flexible tenures from 12 to 120 months.",
    "Senior citizens enjoy additional interest benefits",
  ];

  // Product cards data
  const productCards = [
    {
      title: "Apna Ghar",
      description: "PMAY Home Loan – Subsidy, No Income Docs",
      badge: null,
      highlighted: true,
    },
    {
      title: "Home Loan",
      description: "Quick home loan approval,\neasier eligibility.",
      badge: "TRENDING",
    },
    {
      title: "Fixed Deposit",
      description: "Earn 8.05% with ICICI\nHFC FDs*",
      badge: "BESTSELLER",
    },
    {
      title: "Balance Transfer",
      description: "Lower your EMI burden with better rates.",
      badge: null,
    },
    {
      title: "Micro LAP",
      description: "Small business funding with no income proof.",
      badge: "BESTSELLER",
    },
  ];

  return (
    <section className="flex flex-col items-start relative w-full">
      {/* Banner Section */}
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <div className="w-full">
            {/* First Banner - Home Loan */}
            <div className="flex w-full items-center px-[100px] py-0 relative overflow-hidden">
              <div className="absolute w-full h-full top-0 left-0 backdrop-blur-[6px] bg-[linear-gradient(52deg,rgba(4,60,109,1)_0%,rgba(8,116,211,1)_100%)]" />

              <div className="flex flex-col w-full items-start relative z-10">
                <div className="flex w-full justify-between">
                  {/* Left Content */}
                  <div className="flex flex-col w-[392px] items-start gap-[60px] py-[60px]">
                    <div className="flex flex-col items-start gap-11 w-full">
                      <div className="flex flex-col items-start gap-7 w-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="self-stretch mt-[-1.00px] font-medium text-white text-xl leading-[24px] font-['Mulish',Helvetica]">
                            Own Your Dream Home at
                          </p>
                          <h2 className="self-stretch font-normal text-white text-[44px] leading-[52.8px] font-['Mulish',Helvetica]">
                            Just 8.01% P.A.
                          </h2>
                        </div>

                        <div className="flex flex-col items-start gap-3 w-full">
                          {homeLoanFeatures.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 w-full"
                            >
                              <img
                                className="w-[18px] h-[18px]"
                                alt="Feature check"
                                src="/frame-1000002532.svg"
                              />
                              <p className="flex-1 self-stretch mt-[-1.00px] font-medium text-[#ffffffcc] text-base leading-[19.2px] font-['Mulish',Helvetica]">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-[22px] w-full">
                        <Button className="h-11 px-8 py-0 font-bold text-base tracking-[-0.16px] leading-[19.2px] whitespace-nowrap bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)] text-white border-none">
                          Apply Now
                        </Button>
                        <Button
                          variant="outline"
                          className="h-11 px-8 py-0 font-bold text-base tracking-[-0.16px] leading-[19.2px] whitespace-nowrap bg-white border-[#65000466] backdrop-blur-[2px]"
                        >
                          <span className="bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)] bg-clip-text text-transparent">
                            Check Eligibility
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Form */}
                  <div className="flex flex-col w-[342px] h-[464px] items-start justify-center gap-5 relative">
                    <h3 className="self-stretch opacity-80 font-bold text-white text-lg tracking-[-0.18px] leading-[21.6px] font-['Mulish',Helvetica]">
                      Need Assistance? Get Instant Callback
                    </h3>

                    <Card className="flex flex-col items-start w-full bg-white rounded-xl border border-solid border-[#1111111f] backdrop-blur-[2px]">
                      <CardContent className="flex flex-col items-start gap-6 p-6 w-full">
                        <div className="flex flex-col items-start gap-5 w-full">
                          <div className="flex flex-col items-start gap-3 w-full">
                            <label className="self-stretch mt-[-1.00px] font-semibold text-[#111111] text-sm tracking-[-0.14px] leading-[14px] font-['Mulish',Helvetica]">
                              Full Name
                            </label>
                            <Input
                              className="h-10 px-4 py-0 bg-white border border-solid border-[#1111111f]"
                              placeholder="Your Full Name here"
                            />
                          </div>

                          <div className="flex flex-col items-start gap-3 w-full">
                            <label className="self-stretch font-semibold text-sm tracking-[-0.14px] leading-[14px] mt-[-1.00px] font-['Mulish',Helvetica] text-[#111111]">
                              Mobile
                            </label>
                            <Input
                              className="h-10 px-4 py-0 border border-solid border-[#1111111f]"
                              placeholder="+91"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full">
                          <Checkbox id="whatsapp" className="w-5 h-5" />
                          <label
                            htmlFor="whatsapp"
                            className="w-[232px] opacity-80 font-normal text-[#111111] text-sm tracking-[-0.14px] leading-[14px] font-['Mulish',Helvetica]"
                          >
                            Get messages on whatsapp
                          </label>
                        </div>
                      </CardContent>

                      <div className="flex h-[52px] px-6 py-2.5 w-full bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)] items-center justify-center">
                        <Button className="w-fit font-bold text-white text-base tracking-[-0.16px] leading-[19.2px] whitespace-nowrap font-['Mulish',Helvetica] bg-transparent border-none hover:bg-transparent">
                          Submit Now
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Pagination Dots */}
          <div className="flex w-[392px] items-center gap-3 absolute bottom-4 left-[100px]">
            <div className="w-9 h-2 bg-white rounded" />
            <div className="w-2 h-2 bg-white rounded opacity-40" />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex w-full items-start gap-5 px-[100px] py-10 relative bg-[#fef2ed]">
        {productCards.map((product, index) => (
          <Card
            key={index}
            className={`flex flex-col items-start gap-6 p-6 flex-1 bg-white rounded-lg border border-solid ${
              product.highlighted
                ? "border-[#ea602466] shadow-[0px_4px_20px_#1111110f]"
                : "border-[#1111111f]"
            } relative`}
          >
            {product.badge && (
              <Badge className="absolute top-0 left-32 px-3 py-2.5 bg-[#00447c] rounded-[0px_0px_8px_8px] shadow-[0px_2px_4px_#1111111f] font-extrabold text-white text-[10px] tracking-[0.40px] leading-[14px]">
                {product.badge}
              </Badge>
            )}

            <CardContent className="p-0 flex flex-col gap-6 w-full">
              {/* Product icon placeholder - would need actual icons */}
              <div className="w-[52px] h-[52px]">
                {/* Icon would go here */}
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-center gap-3 w-full">
                  <h3 className="font-bold text-[#111111] text-lg tracking-[-0.18px] leading-[21.6px] whitespace-nowrap font-['Mulish',Helvetica]">
                    {product.title}
                  </h3>
                  <img className="w-6 h-6" alt="Info" src="/frame-4.svg" />
                </div>
                <p className="self-stretch opacity-60 font-medium text-[#111111] text-sm tracking-[0] leading-[19.6px] font-['Mulish',Helvetica] whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Side decorations */}
        <img
          className="absolute w-[100px] h-[276px] top-0 left-0"
          alt="Left decoration"
          src="/frame-2085655423.svg"
        />
        <img
          className="absolute w-[100px] h-[276px] top-0 right-0"
          alt="Right decoration"
          src="/frame-2085655425.svg"
        />
      </div>
    </section>
  );
};
