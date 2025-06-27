import { FacebookIcon, YoutubeIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSubsection = (): JSX.Element => {
  // Footer links data
  const footerCategories = [
    {
      title: "Loans",
      links: [
        "Home Loan",
        "Home Renovation Loan",
        "Plot Loan",
        "Loan Against Property",
      ],
    },
    {
      title: "Calculator",
      links: [
        "Eligibility Calculator",
        "EMI Calculator",
        "Fixed Deposit Calculator",
      ],
    },
    {
      title: "About Us",
      links: [
        "Overview",
        "Investor Relations",
        "Annual Report",
        "Notice of AGM & EGM",
        "Record Dates",
        "Financial results",
      ],
    },
    {
      title: "Contact Us",
      links: [
        "Customer Service",
        "Branch Locator",
        "Enabling Office",
        "Write to Uus",
      ],
    },
  ];

  // Features data
  const features = [
    {
      title: "Secure Banking",
      description: "Advanced Security measnures to protect your money",
      iconSrc: null, // Using Lucide icons instead
    },
    {
      title: "Award-Winning Service",
      description: "Recognized for excellend in banking services",
      iconSrc: null,
    },
    {
      title: "Global Presence",
      description: "Serving customers across 17 countries worldwide",
      iconSrc: null,
    },
  ];

  // Legal links
  const legalLinks = [
    "Terms & Conditions",
    "Privacy Policy",
    "Cookie Policy",
    "Fair Practice Code",
  ];

  return (
    <footer className="flex flex-col w-full items-start gap-10 px-[100px] py-[60px] relative bg-transparent bg-[linear-gradient(0deg,rgba(78,0,4,0.8)_0%,rgba(142,0,6,0.8)_100%),linear-gradient(191deg,rgba(244,111,36,1)_0%,rgba(208,75,40,1)_46%,rgba(177,40,47,1)_100%)]">
      {/* Top section with company info and links */}
      <div className="flex items-start gap-10 relative self-stretch w-full">
        {/* Company info */}
        <div className="flex flex-col w-[390px] items-start gap-8 relative">
          <img className="relative w-[253.33px] h-8" alt="Group" />

          <div className="relative self-stretch font-['Mulish',Helvetica] font-medium text-[#ffffffcc] text-base leading-6">
            ICICI Bank, a leading private sector bank in India, offers a wide
            range of banking products and financial services to corporate and
            retail customers.
          </div>

          <div className="inline-flex flex-col items-start justify-center gap-2 py-1 relative">
            <div className="inline-flex items-start gap-6 relative">
              <div className="relative w-6 h-6">
                <FacebookIcon className="absolute w-[22px] h-[22px] top-px left-px text-white" />
              </div>

              <img
                className="relative w-6 h-6"
                alt="Frame"
                src="/frame-23.svg"
              />

              <div className="relative w-6 h-6">
                <div className="relative w-2.5 h-[21px] top-px left-[7px] bg-[100%_100%]" />
              </div>

              <YoutubeIcon className="relative w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Footer link categories */}
        {footerCategories.map((category, index) => (
          <div
            key={`category-${index}`}
            className="flex flex-col w-[173px] items-start gap-5 relative"
          >
            <div className="relative w-fit mt-[-1.00px] font-['Mulish',Helvetica] font-bold text-white text-xl leading-[30px] whitespace-nowrap">
              {category.title}
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
              {category.links.map((link, linkIndex) => (
                <div
                  key={`link-${index}-${linkIndex}`}
                  className="relative self-stretch font-['Mulish',Helvetica] font-medium text-[#ffffff99] text-base leading-6 cursor-pointer hover:text-white"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Middle section with features */}
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
        <Separator className="bg-white/20 h-px w-full" />

        <div className="flex items-start gap-10 relative self-stretch w-full">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className="flex w-[387px] items-center gap-5 relative"
            >
              <div className="relative w-8 h-8">
                {index === 0 && (
                  <img
                    className="absolute w-7 h-8 top-0 left-0.5"
                    alt="Secure Banking Icon"
                  />
                )}
                {index === 1 && (
                  <div className="relative w-8 h-8 bg-[100%_100%]" />
                )}
                {index === 2 && (
                  <img
                    className="absolute w-7 h-7 top-0.5 left-0.5"
                    alt="Global Presence Icon"
                  />
                )}
              </div>

              <div className="flex-col items-start gap-2 flex-1 grow flex relative">
                <div className="relative w-fit mt-[-1.00px] font-['Mulish',Helvetica] font-semibold text-white text-xl leading-[24px] whitespace-nowrap">
                  {feature.title}
                </div>

                <div className="relative self-stretch font-['Mulish',Helvetica] font-normal text-[#ffffffcc] text-base leading-[19.2px]">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator className="bg-white/20 h-px w-full" />
      </div>

      {/* Bottom section with copyright and legal links */}
      <div className="items-center justify-between self-stretch w-full flex relative">
        <div className="relative w-fit mt-[-1.00px] font-['Mulish',Helvetica] font-medium text-[#ffffffcc] text-base leading-[19.2px] whitespace-nowrap">
          © 2025 ICICI Home Finance. All rights reserved
        </div>

        <div className="inline-flex items-start gap-6 relative">
          {legalLinks.map((link, index) => (
            <div
              key={`legal-${index}`}
              className="relative w-fit mt-[-1.00px] font-['Mulish',Helvetica] font-semibold text-[#ffffffcc] text-base leading-[19.2px] whitespace-nowrap cursor-pointer hover:text-white"
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
