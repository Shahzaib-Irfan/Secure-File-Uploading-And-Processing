import React from "react";
import { Img, Heading } from "./..";

interface Props {
  className?: string;
  header?: string;
}

export default function MacBookProTwoCell({ header = "Name", ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex items-center gap-1">
        <Heading as="h1" className="self-start !text-gray-600_01">
          {header}
        </Heading>
        <div className="flex flex-col">
          <Img src="images/img_icon_order_arrow_up.svg" alt="iconorder_three" className="h-[16px]" />
        </div>
      </div>
    </div>
  );
}
