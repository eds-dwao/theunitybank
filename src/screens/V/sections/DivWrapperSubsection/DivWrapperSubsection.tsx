import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const DivWrapperSubsection = (): JSX.Element => {
  const steps = [
    {
      number: "01",
      title: "Value Investment Mentor",
      isActive: true,
      content: "",
    },
    {
      number: "02",
      title: "Fill Application & Submit Documents",
      isActive: false,
      content: "",
    },
    {
      number: "03",
      title: "Get Loan Sanction & Property Verification",
      isActive: false,
      content: "",
    },
    {
      number: "04",
      title: "Sign Agreement & Receive Disbursal",
      isActive: false,
      content: "",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-11 p-6 md:p-16 lg:p-[100px] relative bg-white">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[143px] relative w-full">
        <div className="flex flex-col items-start gap-[60px] relative">
          <div className="flex flex-col items-start gap-4 relative w-full">
            <div className="inline-flex items-center justify-center gap-2.5 relative rounded">
              <span className="relative w-fit mt-[-1.00px] font-['Mulish',Helvetica] font-bold text-[#ea6024] text-base tracking-[1.60px] leading-[19.2px] whitespace-nowrap">
                OUR PROCESS
              </span>
            </div>

            <h2 className="self-stretch font-normal text-3xl md:text-[44px] tracking-[-0.44px] leading-[52.8px] relative font-['Mulish',Helvetica] text-[#111111]">
              4 Simple Steps to Apply <br />
              for a Loan with ICICI HFC
            </h2>
          </div>

          <div className="flex flex-col w-full lg:w-[580px] items-start relative">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <Separator className="w-full h-px" />
                <div
                  className={`flex items-baseline justify-between px-3 py-9 relative w-full ${step.isActive ? "text-[#ea6024]" : "text-[#16132a]"}`}
                >
                  <div className="flex items-start gap-5 relative flex-1 grow">
                    <span
                      className={`w-8 mt-[-1.00px] font-normal text-xl leading-[24.0px] relative font-['Mulish',Helvetica] tracking-[0] ${step.isActive ? "text-[#ea6024]" : "text-[#16132a]"}`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`relative w-fit mt-[-1.00px] font-['Mulish',Helvetica] font-bold text-xl tracking-[0] leading-[24.0px] ${step.isActive ? "text-[#ea6024]" : "text-[#16132a]"}`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <div
                    className={`relative w-[18.38px] h-3 ${step.isActive ? "rotate-45" : ""}`}
                  >
                    <ChevronRightIcon
                      className={`w-[18px] h-[18px] ${step.isActive ? "-rotate-45" : ""}`}
                    />
                  </div>
                </div>
                {index === steps.length - 1 && (
                  <Separator className="w-full h-px" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-11 relative flex-1">
          <Card className="relative w-full lg:w-[477px] h-[428px] rounded-xl overflow-hidden">
            <CardContent className="p-0 h-full">
              <img
                className="w-full h-full object-cover"
                alt="Loan application process"
                src="/image.jpg"
              />
            </CardContent>
          </Card>

          <p className="relative self-stretch opacity-80 font-['Mulish',Helvetica] font-medium text-[#16132a] text-xl tracking-[0] leading-[30px]">
            Use the online calculator or visit a branch to check how much you
            can borrow and select the right loan (home loan, LAP, micro loan,
            etc.).
          </p>
        </div>
      </div>
    </section>
  );
};
