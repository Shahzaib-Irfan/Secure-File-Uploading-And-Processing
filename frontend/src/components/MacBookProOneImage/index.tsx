import React from "react";
import { Img } from "./..";

interface Props {
  className?: string;
  janeCooperOne?: string;
  janeCooper?: string;
}

export default function MacBookProOneImage({
  janeCooperOne = "images/img_brady_bellini_w.png",
  janeCooper,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="w-full">
        <div className="bg-white-A700">
          <div className="h-[160px] md:h-auto border-indigo-50 border-b border-solid relative">
            <Img src={janeCooperOne} alt="jane_cooper_one" className="h-[160px] w-full object-cover" />
            <div className="flex flex-col bottom-[14.00px] left-[16.00px] m-auto absolute">
              <div className="flex flex-col">
                <div className="flex flex-col items-center p-2 bg-white-A700 rounded">
                  <div className="flex flex-col">
                    {!!janeCooper ? <Img src={janeCooper} alt="jane_cooper" className="h-[16px]" /> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
