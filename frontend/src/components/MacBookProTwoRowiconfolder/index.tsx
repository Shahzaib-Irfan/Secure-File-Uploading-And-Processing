import React from "react";
import { Text, Img, Heading } from "./..";

interface Props {
  className?: string;
  iconfolderOne?: string;
  documentation?: string;
  savannahNguyen?: string;
  date?: string;
}

export default function MacBookProTwoRowiconfolder({
  iconfolderOne = "images/img_icon.svg",
  documentation = "Documentation",
  savannahNguyen = "Savannah Nguyen",
  date = "16/02/2021",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center p-3">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex flex-col items-center p-2 bg-white-A700 rounded">
                <div className="flex flex-col">
                  <Img src={iconfolderOne} alt="iconfolder_one" className="h-[16px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:self-stretch p-2 flex-1">
        <div className="flex py-2.5">
          <Heading as="h1" className="self-start">
            {documentation}
          </Heading>
        </div>
      </div>
      <div className="flex justify-center w-[20%] md:w-full p-3">
        <div className="flex items-center w-full gap-2">
          <div className="w-[19%]">
            <div>
              <div>
                <div className="bg-white-A700 rounded-[16px]">
                  <Img
                    src="images/img_paul_hanaoka_ov_1.png"
                    alt="paulhanaokaov"
                    className="h-[32px] w-[32px] rounded-[50%]"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text as="p" className="text-right">
            {savannahNguyen}
          </Text>
        </div>
      </div>
      <div className="flex justify-center w-[14%] md:w-full p-3">
        <div className="flex py-1.5">
          <Text as="p" className="self-end">
            {date}
          </Text>
        </div>
      </div>
    </div>
  );
}
