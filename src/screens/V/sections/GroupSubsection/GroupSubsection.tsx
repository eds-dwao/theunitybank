import {
  ChevronDownIcon,
  GlobeIcon,
  PhoneIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const GroupSubsection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    {
      title: "PMAY",
      description: "Affordable Schemes",
    },
    {
      title: "Home Loan",
      description: "Apply Online Now",
    },
    {
      title: "Fixed Deposit",
      description: "Invest. Relax. Earn.",
    },
    {
      title: "Investors",
      description: "Reports, Policy, Ratings",
    },
    {
      title: "More",
      description: "Products, Knowledge Hub",
    },
  ];

  return (
    <header className="w-full h-40 bg-white shadow-[0px_4px_11px_5px_#0000001c]">
      <div className="mx-auto max-w-[1340px] h-[159px] relative">
        {/* Logo section */}
        <div className="absolute top-0 left-0 w-[460px] h-20">
          <img
            className="w-[253px] h-8 absolute top-[18px] left-[105px]"
            alt="Company Logo"
          />
          <img
            className="w-[74px] h-[69px] absolute top-[5px] left-[378px] object-cover"
            alt="Logo Image"
          />
        </div>

        {/* SearchIcon bar in top section */}
        <div className="flex w-[431px] h-[45px] items-center justify-between px-0 py-[15px] absolute top-0 left-[228px] border-b border-[#ffffff85]">
          <div className="relative w-fit opacity-80 font-normal text-white text-base leading-[19.2px] whitespace-nowrap">
            SearchIcon Jio Institute
          </div>
          <div className="mt-[-4.50px] mb-[-4.50px] relative w-6 h-6 opacity-80">
            <SearchIcon className="w-[18px] h-[18px] absolute top-[3px] left-[3px]" />
          </div>
        </div>

        {/* Top right section with search, about us, language, and call button */}
        <div className="flex w-[847px] items-center justify-between absolute top-[11px] left-[493px]">
          <div className="flex w-[291px] items-center gap-3">
            <div className="relative w-6 h-6 opacity-80">
              <SearchIcon className="w-[18px] h-[18px] absolute top-[3px] left-[3px]" />
            </div>
            <Input
              className="border-none bg-transparent opacity-50 font-normal text-base leading-[19.2px]"
              placeholder='SearchIcon "FD Calculator"'
            />
          </div>

          <div className="flex items-center gap-10">
            <div className="flex h-11 items-center justify-center gap-8">
              <Button
                variant="ghost"
                className="font-medium text-base leading-4 p-0 h-auto"
              >
                About Us
              </Button>

              <div className="flex items-center gap-1">
                <GlobeIcon className="w-5 h-5" />
                <div className="flex items-center">
                  <span className="font-medium text-base leading-4">
                    English
                  </span>
                  <ChevronDownIcon className="w-5 h-5" />
                </div>
              </div>
            </div>

            <Button className="flex items-center gap-3 px-5 py-2 rounded-[50px] shadow-[0px_4px_20px_#1111111f] bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)]">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <PhoneIcon className="w-4 h-4" />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <div className="font-bold text-white text-sm leading-[16.8px]">
                  Call Us @
                </div>
                <div className="opacity-80 font-medium text-white text-base leading-4">
                  1800-2345-3456
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Horizontal line */}
        <img
          className="absolute w-[853px] top-[73px] left-[487px] h-px object-cover"
          alt="Line"
          src="/line-23.svg"
        />

        {/* Main navigation menu */}
        <div className="flex w-[1240px] items-center justify-between absolute top-[79px] left-[100px]">
          <NavigationMenu className="h-20">
            <NavigationMenuList className="flex items-center h-full">
              {navItems.map((item, index) => (
                <NavigationMenuItem
                  key={index}
                  className="flex flex-col w-[171px] items-center justify-center gap-2 px-5 py-0"
                >
                  <div className="flex items-start gap-2 w-full">
                    <div className="font-bold text-[#111111] text-lg tracking-[-0.36px] leading-[18px] whitespace-nowrap mt-[-1.00px] font-['Mulish',Helvetica]">
                      {item.title}
                    </div>
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                  <div className="opacity-80 font-normal text-[#111111] text-xs tracking-[0] leading-3 w-full font-['Mulish',Helvetica]">
                    {item.description}
                  </div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* User Portal section */}
          <div className="flex flex-col items-center justify-center gap-2 pl-5 pr-0 py-0">
            <div className="flex items-center justify-end gap-2 w-full">
              <img
                className="w-[15.5px] h-[16.48px]"
                alt="Vector"
                src="/vector-2.svg"
              />
              <div className="font-bold text-[#111111] text-lg text-right tracking-[-0.36px] leading-[18px] whitespace-nowrap font-['Mulish',Helvetica]">
                User Portal
              </div>
              <ChevronDownIcon className="w-5 h-5" />
            </div>
            <div className="opacity-80 font-normal text-[#111111] text-xs tracking-[0] leading-3 font-['Mulish',Helvetica]">
              Customer &amp; Employees Portal
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
