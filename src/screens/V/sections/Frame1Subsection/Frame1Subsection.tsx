import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame1Subsection = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      title: "Loan Against Property",
      description: "Unlock funds with your property's market value.",
      bgColor: "bg-[#d2ebff]",
    },
    {
      title: "Micro LAP",
      description: "Loan without income proof, using your property.",
      bgColor: "bg-[#d2ebff]",
    },
    {
      title: "Fixed Deposit",
      description: "Earn 8.05% safely with fixed deposits.*",
      bgColor: "bg-[#d2ebff]",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-[60px] py-[60px] pb-[100px] px-[100px] bg-white w-full">
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center justify-center">
            <span className="font-['Mulish',Helvetica] font-bold text-[#ea6024] text-base tracking-[1.60px] leading-[19.2px]">
              OTHER PRODUCTS
            </span>
          </div>

          <h2 className="font-['Mulish',Helvetica] font-normal text-[#111111] text-[40px] tracking-[-0.40px] leading-[48.0px]">
            Explore More Financial Solutions
          </h2>
        </div>

        <Button variant="ghost" className="h-[60px] px-8 py-0 rounded-lg">
          <span className="bg-[linear-gradient(270deg,rgba(229,70,28,1)_0%,rgba(238,111,50,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Mulish',Helvetica] font-bold text-xl tracking-[-0.20px] leading-[24.0px]">
            View All Products
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-start gap-10 w-full">
        <div className="flex items-start gap-10 w-full">
          {products.map((product, index) => (
            <Card
              key={`product-${index}`}
              className="flex items-start flex-1 rounded-lg overflow-hidden border border-solid border-[#1111111f] bg-white"
            >
              <div
                className={`relative w-[135px] h-[135px] ${product.bgColor}`}
              >
                <img
                  className="absolute w-[135px] h-[135px] top-0 left-0 object-cover"
                  alt="Product image"
                />
              </div>

              <CardContent className="flex flex-col items-start gap-3 p-4 flex-1">
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="font-['Mulish',Helvetica] font-bold text-[#00447c] text-xl leading-[24.0px] w-full">
                    {product.title}
                  </h3>

                  <p className="opacity-60 font-['Mulish',Helvetica] font-normal text-[#111111] text-sm leading-[19.6px] w-full">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full">
                  <span className="text-[#ed6e31] text-base tracking-[-0.16px] leading-[19.2px] font-['Mulish',Helvetica] font-bold">
                    Explore
                  </span>
                  <ArrowRightIcon className="w-[18px] h-[18px] text-[#ed6e31]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
