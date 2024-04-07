import React from "react";
import { Text, Img } from "./..";

interface Props {
  className?: string;
  bessieCooper?: string;
}

export default function MacBookProTwoCell2({ bessieCooper = "Bessie Cooper", ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex items-center w-full gap-2">
        <div className="w-[19%]">
          <div>
            <div>
              <div className="bg-white-A700 rounded-[16px]">
                <Img
                  src="images/img_paul_hanaoka_ov_32x32.png"
                  alt="circleimage"
                  className="h-[64px] w-[64px] rounded-[25%]"
                />
              </div>
            </div>
          </div>
        </div>
        <Text as="p" className="text-right">
          {bessieCooper}
        </Text>
      </div>
    </div>
  );
}
