import React from "react";
import { Img } from "./..";

interface Props {
  className?: string;
  fileLink?: string; // Rename janeCooperOne to fileLink
  janeCooper?: string;
}

export default function MacBookProOneImage({
  fileLink = "images/img_brady_bellini_w.png", // Default image URL
  janeCooper,
  ...props
}: Props) {
  const isImage = fileLink?.endsWith(".png") || fileLink?.endsWith(".jpg") || fileLink?.endsWith(".jpeg");
  function openFileInNewTab(fileLink) {
  if (!fileLink) {
    console.error('File URL is required');
    return;
  }

  const newWindow = window.open(fileLink, '_blank');

  if (newWindow) {
    newWindow.focus();
  } else {
    console.error('Failed to open file in a new tab');
  }
}
  const getFilePreview = () => {
    if (isImage) {
      return <Img src={fileLink} alt="file_preview" onClick={() => openFileInNewTab(fileLink)} className="h-[160px] w-full object-cover" />;
    } else {
      return <Img src={`https://docs.google.com/viewerng/viewer?url=${fileLink}&embedded=true`} alt="file_preview" className="h-[160px] w-full object-cover" />;
    }
  };

  return (
    <div {...props}>
      <div className="w-full">
        <div className="bg-white-A700">
          <div className="h-[160px] md:h-auto border-indigo-50 border-b border-solid relative cursor-pointer">
            {getFilePreview()}
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