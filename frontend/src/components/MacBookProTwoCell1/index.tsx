import React from "react";
import { Img } from "./..";

interface Props {
  className?: string;
}

export default function MacBookProTwoCell1({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col items-center p-2 bg-white-A700 rounded">
              <div className="flex flex-col">
                <Img src="images/img_icon.svg" alt="image" className="h-[16px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
