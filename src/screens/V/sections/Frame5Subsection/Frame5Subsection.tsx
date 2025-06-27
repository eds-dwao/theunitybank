import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const Frame5Subsection = (): JSX.Element => {
  // Data for the first column
  const column1Links = [
    "Apply for Home Loan",
    "Home Loan EMI Calculator",
    "Check Loan Eligibility",
    "PMAY Subsidy Information",
  ];

  // Data for the second column
  const column2Links = [
    "Fixed Deposit Interest Rates",
    "Book a Fixed Deposit",
    "Track Loan Application Status",
    "Download Forms",
  ];

  // Data for the third column
  const column3Links = [
    "Customer Grievance Redressal",
    "Branch Locator",
    "Loan Repayment Options",
    "KYC & AML Guidelines",
  ];

  return (
    <section className="flex flex-col w-full items-start gap-10 px-[100px] py-20 relative bg-[#fef2ed]">
      <header className="flex flex-col items-start gap-4 relative self-stretch w-full">
        <div className="inline-flex items-center justify-center gap-2.5 relative rounded">
          <span className="relative w-fit mt-[-1.00px] font-['Mulish',Helvetica] font-semibold text-[#ea6024] text-base tracking-[1.60px] leading-[19.2px] whitespace-nowrap">
            IMPORTANT LINKS
          </span>
        </div>

        <h2 className="relative self-stretch font-['Mulish',Helvetica] font-normal text-[#111111] text-[40px] tracking-[-0.40px] leading-[48.0px]">
          Quick Access to Key Services
        </h2>
      </header>

      <div className="flex items-start gap-10 self-stretch w-full">
        {/* Column 1 */}
        <div className="flex flex-col items-start gap-[60px] flex-1">
          <Accordion type="single" collapsible className="w-full">
            {column1Links.map((link, index) => (
              <AccordionItem
                key={`col1-${index}`}
                value={`col1-item-${index}`}
                className="border-b border-[#e0e0e0]"
              >
                <AccordionTrigger className="py-6 px-3 font-['Mulish',Helvetica] font-bold text-[#111111] text-base">
                  {link}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-3 pb-4">Content for {link}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-start gap-[60px] flex-1">
          <Accordion type="single" collapsible className="w-full">
            {column2Links.map((link, index) => (
              <AccordionItem
                key={`col2-${index}`}
                value={`col2-item-${index}`}
                className="border-b border-[#e0e0e0]"
              >
                <AccordionTrigger className="py-6 px-3 font-['Mulish',Helvetica] font-bold text-[#16132a] text-base">
                  {link}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-3 pb-4">Content for {link}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-start gap-[60px] flex-1">
          <Accordion type="single" collapsible className="w-full">
            {column3Links.map((link, index) => (
              <AccordionItem
                key={`col3-${index}`}
                value={`col3-item-${index}`}
                className="border-b border-[#e0e0e0]"
              >
                <AccordionTrigger className="py-6 px-3 font-['Mulish',Helvetica] font-bold text-[#16132a] text-base">
                  {link}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-3 pb-4">Content for {link}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
