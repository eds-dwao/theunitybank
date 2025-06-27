import { PlayIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame3Subsection = (): JSX.Element => {
  // Testimonial users data
  const testimonialUsers = [
    {
      id: 1,
      name: "Satish Kumar",
      profession: "Data Analyst",
      isActive: true,
    },
    {
      id: 2,
      name: "Parvez Ali Khan",
      profession: "HR",
      isActive: false,
    },
    {
      id: 3,
      name: "Aarohi Singh Seth",
      profession: "Chef",
      isActive: false,
    },
    {
      id: 4,
      name: "Rajesh Singh",
      profession: "IT Professional",
      isActive: false,
    },
  ];

  return (
    <section className="flex flex-col items-start gap-[60px] py-[100px] px-[100px] bg-white w-full">
      {/* Header */}
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col items-start gap-4">
          <Badge
            variant="outline"
            className="font-bold text-[#ea6024] text-base tracking-[1.60px] rounded bg-transparent border-none px-0"
          >
            TESTIMONIALS
          </Badge>
          <h2 className="font-normal text-[#111111] text-[40px] tracking-[-0.40px] leading-[48.0px] font-['Mulish',Helvetica]">
            Real Stories, Real Experiences
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center gap-10 w-full">
        {/* User selection sidebar */}
        <div className="flex flex-col w-[279px] items-start gap-5 self-stretch">
          {testimonialUsers.map((user) => (
            <Button
              key={user.id}
              variant="outline"
              className={`flex items-center gap-3.5 p-3 w-full h-auto justify-start rounded-[50px] ${
                user.isActive
                  ? "bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)] border-none shadow-[0px_4px_20px_#1111111f]"
                  : "bg-transparent border border-solid border-[#11111133]"
              }`}
            >
              <Avatar className="w-[52px] h-[52px] rounded-[40px]">
                <AvatarFallback
                  className={
                    user.isActive
                      ? "bg-[#c7c7c7]"
                      : user.id === 2
                        ? "bg-[#ff9a9a]"
                        : "bg-[#c7c7c7]"
                  }
                >
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start gap-1 text-left">
                <div
                  className={`font-bold text-base leading-[19.2px] font-['Mulish',Helvetica] ${user.isActive ? "text-white" : "text-[#111111]"}`}
                >
                  {user.name}
                </div>
                <div
                  className={`font-medium text-sm leading-[16.8px] font-['Mulish',Helvetica] ${user.isActive ? "text-white opacity-80" : "text-[#ea6024]"}`}
                >
                  {user.profession}
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Testimonial content */}
        <Card className="flex flex-1 items-start rounded-3xl border border-solid border-[#1111111f] overflow-hidden">
          <div className="relative w-[618px] h-[364px] bg-white">
            <div className="relative w-[576px] h-[325px] top-5 left-[21px]">
              <CardContent className="flex flex-col w-[576px] h-[325px] items-start justify-center gap-8 p-0 absolute top-0 left-0 bg-white rounded-2xl overflow-hidden border border-solid border-[#65000466] shadow-[0px_4px_20px_#1111110f]">
                <div className="flex items-center justify-center gap-[31px] relative flex-1 self-stretch w-full grow bg-[#c7c7c7]">
                  <div className="absolute w-full h-full top-0 left-0 bg-[#c7c7c7]"></div>
                  <Button
                    variant="outline"
                    className="flex flex-col w-20 h-20 items-center justify-center gap-2.5 p-6 z-10 bg-[#ffffff52] rounded-[100px] overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] border-none"
                  >
                    <PlayIcon className="w-8 h-8" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>

          <div className="relative self-stretch w-px bg-[#1111111f]" />

          <CardContent className="flex flex-col items-start gap-5 p-6 flex-1 self-stretch">
            <div className="flex items-start justify-between w-full">
              <h3 className="flex-1 font-bold text-[#043c6d] text-xl leading-[24.0px] font-['Mulish',Helvetica]">
                Customer Voices
              </h3>
              <img
                className="w-[30.34px] h-[24.34px]"
                alt="Quote icon"
                src="/--2.svg"
              />
            </div>

            <div className="flex-1 self-stretch font-['Mulish',Helvetica] text-base tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:11] [-webkit-box-orient:vertical]">
              <span className="font-bold text-[#111111]">
                I didn&apos;t have formal income proof, but their team
                understood my situation and guided me through every step.
                <br />
                <br />
              </span>

              <span className="text-[#11111199]">
                The process was smooth, the approval was quick, and I got the
                best deal for my budget.
                <br />
                <br />
                Thanks to ICICI HFC, I now live in a home I can truly call my
                own.&#34;
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
