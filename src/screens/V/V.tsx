import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { DesktopSubsection } from "./sections/DesktopSubsection";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FooterSubsection } from "./sections/FooterSubsection/FooterSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection";
import { Frame4Subsection } from "./sections/Frame4Subsection";
import { Frame5Subsection } from "./sections/Frame5Subsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { GroupSubsection } from "./sections/GroupSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

export const V = (): JSX.Element => {
  const contactOptions = [
    {
      title: "Call Us",
      height: "52px",
    },
    {
      title: "Send an\nEmail",
      height: "69px",
    },
    {
      title: "Branch\nLocator",
      height: "70px",
    },
  ];

  return (
    <div className="flex flex-col items-start w-full relative bg-[#ffffff] overflow-hidden">
      <GroupSubsection />
      <FrameSubsection />
      <DesktopSubsection />
      <FrameWrapperSubsection />
      <DivWrapperSubsection />
      <DivSubsection />
      <SectionComponentNodeSubsection />
      <Frame1Subsection />
      <Frame2Subsection />
      <Frame3Subsection />
      <Frame4Subsection />
      <Frame5Subsection />
      <FooterSubsection />

      <Card className="fixed w-[114px] h-[263px] top-[319px] left-[1407px] shadow-[0px_4px_20px_#1111111f] p-0 border-0">
        <CardContent className="p-0 flex flex-row h-full">
          <div className="relative w-[33px] h-full bg-[url(/union.svg)] bg-[100%_100%]">
            <img
              className="absolute w-[33px] h-[247px] top-2 left-0"
              alt="Union"
              src="/union-1.svg"
            />
            <img
              className="absolute w-8 h-8 top-[116px] left-0"
              alt="Frame"
              src="/frame-2085655528.svg"
            />
          </div>

          <div className="w-[81px] h-full bg-[#ffffff] rounded-[8px_0px_0px_8px]">
            <div className="relative w-[54px] h-[239px] top-3 left-3.5">
              {contactOptions.map((option, index) => (
                <div
                  key={`contact-option-${index}`}
                  className={`absolute w-14 h-[${option.height}] ${
                    index === 0
                      ? "top-0 left-1"
                      : index === 1
                        ? "top-[81px] left-0"
                        : "top-[169px] left-0.5"
                  }`}
                >
                  {index === 2 && (
                    <div className="absolute w-8 h-8 top-[-500px] left-[-3826px]">
                      <img
                        className="absolute w-px h-px top-0 left-0"
                        alt="Vector"
                        src="/vector-4.svg"
                      />
                      <img
                        className="absolute w-[11px] h-[11px] top-0 left-0"
                        alt="Vector"
                        src="/vector-1.svg"
                      />
                      <img
                        className="absolute w-8 h-8 top-0 left-0"
                        alt="Vector"
                        src="/vector.svg"
                      />
                      <img
                        className="absolute w-[3px] h-[3px] top-0 left-0"
                        alt="Vector"
                        src="/vector-5.svg"
                      />
                      <img
                        className="absolute w-px h-px top-0 left-0"
                        alt="Vector"
                        src="/vector-3.svg"
                      />
                    </div>
                  )}
                  <div
                    className={`absolute ${
                      index === 0
                        ? "top-[35px] left-0"
                        : index === 1
                          ? "top-[35px] left-0"
                          : "top-9 left-0"
                    } [font-family:'Mulish',Helvetica] font-semibold text-[#111111] text-sm ${
                      index === 0 ? "" : "text-center"
                    } tracking-[0] leading-[16.8px] whitespace-${
                      index === 0 ? "nowrap" : "normal"
                    }`}
                  >
                    {option.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
