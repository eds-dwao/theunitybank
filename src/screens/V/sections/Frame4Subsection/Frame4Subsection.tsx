import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame4Subsection = (): JSX.Element => {
  // Article data for mapping
  const featuredArticles = [
    {
      id: 1,
      title:
        "Home Loan Eligibility and Documents required for a Salaried Person",
      image: "", // Image URL was empty in original code
      isFeatured: true,
    },
    {
      id: 2,
      title: "FD Calculator - How Fixed Deposit Interest Rate is Calculated",
      image: "", // Image URL was empty in original code
      isFeatured: false,
    },
  ];

  const smallArticles = [
    {
      id: 1,
      title: "5 Things to Know About ICICI HFC Apna Ghar Home Loan",
      image: "", // Image URL was empty in original code
    },
    {
      id: 2,
      title: "How Impact of EMI Default on CIBIL Score?",
      image: "", // Image URL was empty in original code
    },
    {
      id: 3,
      title: "How Settlements Affect the CIBIL Score for NPA Customers?",
      image: "", // Image URL was empty in original code
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-[60px] pt-[60px] pb-[100px] px-[100px] bg-white">
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center justify-center gap-2.5 rounded">
            <span className="font-['Mulish',Helvetica] font-bold text-[#ea6024] text-base tracking-[1.60px] leading-[19.2px]">
              ARTICLES
            </span>
          </div>

          <h2 className="font-['Mulish',Helvetica] font-normal text-[#111111] text-[40px] tracking-[-0.40px] leading-[48.0px]">
            Recommended Home Loan Guide
          </h2>
        </div>

        <Button
          variant="outline"
          className="h-[60px] px-8 py-0 rounded-lg border border-solid border-[#cd4000] text-[#cd4000] font-['Mulish',Helvetica] font-bold text-xl tracking-[-0.20px] leading-[24.0px]"
        >
          View All Articles
        </Button>
      </div>

      <div className="flex flex-col items-start gap-10 w-full">
        <div className="flex items-center gap-10">
          {/* Featured article with gradient overlay */}
          <div className="relative w-[813px] h-[451px] rounded-lg overflow-hidden">
            <img
              className="absolute w-full h-full top-0 left-0 object-cover"
              alt="Featured article"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(17,17,17,0)_0%,rgba(17,17,17,1)_100%)]" />
            <div className="absolute bottom-10 left-10 right-10 font-['Mulish',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[38.4px]">
              {featuredArticles[0].title}
            </div>
          </div>

          {/* Secondary featured article */}
          <Card className="flex flex-col w-[387px] rounded-lg overflow-hidden border border-solid border-[#1111111f]">
            <div className="relative w-full h-60 bg-[#c7c7c7]">
              <img
                className="absolute w-full h-full top-0 left-0 object-cover"
                alt="Article thumbnail"
              />
            </div>
            <CardContent className="flex items-start gap-2.5 p-8">
              <h3 className="font-['Mulish',Helvetica] font-bold text-[#111111] text-2xl tracking-[0] leading-[28.8px]">
                {featuredArticles[1].title}
              </h3>
            </CardContent>
            <div className="flex h-[60px] items-center gap-2.5 px-6 py-4 w-full bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)]">
              <span className="flex-1 font-['Mulish',Helvetica] font-bold text-white text-xl tracking-[-0.20px] leading-[24.0px]">
                Read More
              </span>
              <div className="relative w-5 h-5 rotate-180">
                <ArrowLeftIcon className="w-5 h-5 text-white" />
              </div>
            </div>
          </Card>
        </div>

        <div className="flex items-start gap-10 w-full">
          {smallArticles.map((article, index) => (
            <Card
              key={article.id}
              className="flex items-start flex-1 rounded-lg overflow-hidden border border-solid border-[#1111111f]"
            >
              <div className="relative w-[120px] h-[120px] bg-[#efefef]">
                <img
                  className="absolute w-full h-full top-0 left-0 object-cover"
                  alt={`Article thumbnail ${index + 1}`}
                />
              </div>
              <CardContent className="flex items-center p-6 flex-1">
                <h3 className="font-['Mulish',Helvetica] font-bold text-[#111111] text-xl tracking-[0] leading-[24.0px]">
                  {article.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
