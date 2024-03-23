import React from "react";
import { Img } from "./..";

interface Props {
  className?: string;
  iconlistulOne?: string;
  imageTwo?: string;
}

export default function MacBookProOneRowiconlistul({
  iconlistulOne,
  imageTwo = "images/img_info_circle_full.svg",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col items-center p-3">
            {!!iconlistulOne ? <Img src={iconlistulOne} alt="iconlistul_one" className="h-[16px] w-[16px]" /> : null}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col items-center p-3">
            <Img src={imageTwo} alt="image_two" className="h-[16px] w-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
