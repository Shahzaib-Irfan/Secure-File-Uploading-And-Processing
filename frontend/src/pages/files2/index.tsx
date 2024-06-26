import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import Header from "../../components/Header";
import MacBookProOneRowiconlistul from "../../components/MacBookProOneRowiconlistul";
import MacBookProTwoCell from "../../components/MacBookProTwoCell";
import MacBookProTwoCell1 from "../../components/MacBookProTwoCell1";
import MacBookProTwoCell2 from "../../components/MacBookProTwoCell2";
import MacBookProTwoRowiconfolder from "../../components/MacBookProTwoRowiconfolder";

export default function HomeListView() {
  return (
    <>
      <Helmet>
        <title>IncogFiles</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <Header className="p-4 border-indigo-50 border-b border-solid bg-white-A700" />
        <div>
          <div className="flex md:flex-col justify-center items-start">
            <div className="flex flex-col items-start w-[22%] md:w-full py-6 md:p-5 sm:py-5">
              {/* <div className="flex justify-between items-center w-[51%] md:w-full gap-5 p-[9px]">
                <Img src="images/img_check_circle.svg" alt="image" className="h-[16px] w-[16px] ml-3.5 md:ml-0" />
                <Heading size="md" as="h1" className="self-end mr-3.5 md:mr-0 !text-gray-600_01">
                  Priority
                </Heading>
              </div>
              <div className="flex justify-between items-center w-[54%] md:w-full gap-5 p-[9px]">
                <div className="flex flex-col ml-3.5 py-px md:ml-0">
                  <Img src="images/img_google_drive.svg" alt="googledrive_one" className="h-[14px]" />
                </div>
                <Heading size="md" as="h2" className="self-end mr-3.5 md:mr-0 !text-gray-600_01">
                  My Drive
                </Heading>
              </div>
              <div className="flex self-stretch justify-between items-center gap-5 p-2.5 rounded-tr-[21px] rounded-br-[21px] bg-gray-100">
                <Img
                  src="images/img_icon_users.svg"
                  alt="iconusers_one"
                  className="h-[16px] w-[16px] ml-[13px] md:ml-0"
                />
                <Heading size="md" as="h3" className="mr-[75px] md:mr-0 !text-blue-800">
                  Shared with me
                </Heading>
              </div> */}
              <div className="flex justify-between items-center w-[49%] md:w-full gap-5 p-2.5">
                <Img src="images/img_time.svg" alt="time_one" className="h-[16px] w-[16px] ml-[13px] md:ml-0" />
                <Heading size="md" as="h4" className="mr-[13px] md:mr-0 !text-gray-600_01">
                  Recent
                </Heading>
              </div>
              <div className="flex justify-between items-center w-[51%] md:w-full gap-5 p-2.5">
                <Img src="images/img_icon_star_o.svg" alt="image_one" className="h-[16px] w-[16px] ml-[13px] md:ml-0" />
                <Heading size="md" as="h5" className="mr-[13px] md:mr-0 !text-gray-600_01">
                  Starred
                </Heading>
              </div>
              <div className="flex justify-between items-center w-[46%] md:w-full gap-5 p-2.5">
                <Img
                  src="images/img_icon_trash.svg"
                  alt="icontrash_one"
                  className="h-[16px] w-[16px] ml-[13px] md:ml-0"
                />
                <Heading size="md" as="h6" className="mr-[13px] md:mr-0 !text-gray-600_01">
                  Trash
                </Heading>
              </div>
            </div>
            <div className="md:self-stretch md:p-5 flex-1">
              <div className="flex justify-between items-center gap-5 p-4 border-indigo-50 border-b border-solid bg-white-A700">
                <div className="flex items-center ml-2 gap-2 md:ml-0">
                  <Text size="s" as="p" className="self-end !text-blue_gray-900">
                    My Drive
                  </Text>
                  <Img
                    src="images/img_icon_caret_bottom_blue_gray_900.svg"
                    alt="iconcaret_three"
                    className="h-[16px] w-[16px]"
                  />
                </div>
                <MacBookProOneRowiconlistul
                  iconlistulOne="images/img_icon_list_ul.svg"
                  className="flex items-center mr-1 gap-2 md:mr-0"
                />
              </div>
              <div className="flex md:flex-col justify-center items-center gap-6">
                <div className="flex flex-col md:self-stretch flex-1">
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading size="s" as="h6" className="!text-gray-600_01">
                        Folders
                      </Heading>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Heading size="s" as="h6" className="!text-gray-600_01">
                        Name
                      </Heading>
                      <Img src="images/img_icon_order_arrow_up.svg" alt="iconorder_one" className="h-[16px] w-[16px]" />
                    </div>
                  </div>
                  <div className="flex md:flex-col w-[74%] md:w-full mt-4 gap-6">
                    <div className="flex">
                      <div className="flex items-center gap-4 p-4 border-indigo-50 border border-solid bg-white-A700 rounded">
                        <div className="flex flex-col">
                          <Img src="images/img_icon.svg" alt="2020_planning" className="h-[20px]" />
                        </div>
                        <Heading as="p">2020 Planning</Heading>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center gap-4 p-4 border-indigo-50 border border-solid bg-white-A700 rounded">
                        <div className="flex flex-col">
                          <Img src="images/img_icon.svg" alt="icon_one" className="h-[20px]" />
                        </div>
                        <Heading as="p" className="self-start">
                          Finances
                        </Heading>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center gap-4 p-4 border-indigo-50 border border-solid bg-white-A700 rounded">
                        <div className="flex flex-col">
                          <Img src="images/img_icon.svg" alt="icon_one" className="h-[20px]" />
                        </div>
                        <Heading as="p" className="self-start">
                          Work Files
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-12 py-px">
                    <Heading size="s" as="h6" className="!text-gray-600_01">
                      Files
                    </Heading>
                  </div>
                  <div className="flex justify-end mt-4 ml-14 md:ml-0">
                    <MacBookProTwoCell className="flex items-center p-3" />
                    <div className="flex p-3">
                      <Heading as="p" className="mt-1 mb-0.5 !text-gray-600_01">
                        Shared by
                      </Heading>
                    </div>
                    <div className="flex p-3">
                      <Heading as="p" className="mt-0.5 mb-1 !text-gray-600_01">
                        Share Date
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col gap-px">
                    <div className="flex md:flex-col justify-center bg-white-A700 shadow-bs flex-1">
                      <MacBookProTwoCell1 className="flex flex-col items-center p-3 md:p-5" />
                      <div className="flex justify-center md:self-stretch p-2 md:p-5 flex-1">
                        <div className="flex py-2.5">
                          <Heading as="p" className="self-end">
                            Design sprint Q1 2021
                          </Heading>
                        </div>
                      </div>
                      <MacBookProTwoCell2 className="flex justify-center items-center w-[20%] md:w-full p-3 md:p-5" />
                      <div className="flex justify-center w-[14%] md:w-full p-3 md:p-5">
                        <div className="flex py-1.5">
                          <Text as="p" className="self-end">
                            16/02/2021
                          </Text>
                        </div>
                      </div>
                    </div>
                    <MacBookProTwoRowiconfolder className="flex md:flex-col justify-center items-center bg-white-A700 shadow-bs flex-1" />
                    <MacBookProTwoRowiconfolder
                      documentation="Notes"
                      savannahNguyen="Ralph Edwards"
                      className="flex md:flex-col justify-center items-center bg-white-A700 shadow-bs flex-1"
                    />
                    <MacBookProTwoRowiconfolder
                      iconfolderOne="images/img_icon_document_image.svg"
                      documentation="Use-This-Meme.jpg"
                      savannahNguyen="Esther Howard"
                      className="flex md:flex-col justify-center items-center bg-white-A700 shadow-bs flex-1"
                    />
                    <MacBookProTwoRowiconfolder
                      iconfolderOne="images/img_icon_document_image.svg"
                      documentation="Magical-Retreat-2020.jpg"
                      savannahNguyen="Jane Cooper"
                      className="flex md:flex-col justify-center items-center bg-white-A700 shadow-bs flex-1"
                    />
                    <MacBookProTwoRowiconfolder
                      iconfolderOne="images/img_icon_document_vectorial.svg"
                      documentation="Drigma-Logo.eps"
                      savannahNguyen="Theresa Webb"
                      className="flex md:flex-col justify-center items-center bg-white-A700 shadow-bs flex-1"
                    />
                    <MacBookProTwoRowiconfolder
                      iconfolderOne="images/img_icon_document_text.svg"
                      documentation="Table Documentation"
                      savannahNguyen="Robert Fox"
                      className="flex md:flex-col justify-center items-center bg-white-A700 shadow-bs flex-1"
                    />
                    <MacBookProTwoRowiconfolder
                      iconfolderOne="images/img_icon_document_multimedia.svg"
                      documentation="Drigma-Video.mp4"
                      savannahNguyen="Darlene Robertson"
                      className="flex md:flex-col justify-center items-center bg-white-A700 shadow-bs flex-1"
                    />
                    <MacBookProTwoRowiconfolder
                      iconfolderOne="images/img_icon_document_multimedia.svg"
                      documentation="Figma-Tutorial.mp4"
                      savannahNguyen="Dianne Russell"
                      className="flex md:flex-col justify-center items-center bg-white-A700 shadow-bs flex-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center w-[6%] md:w-full px-4 border-indigo-50 border-l border-solid bg-white-A700">
                  <div className="flex flex-col self-stretch items-center gap-6 py-6 sm:py-5">
                    <Img src="images/img_image_7.png" alt="imageseven_one" className="w-[24px] object-cover" />
                    <Img src="images/img_image_8.png" alt="imageeight_one" className="w-[24px] object-cover" />
                    <Img src="images/img_image_9.png" alt="imagenine_one" className="w-[24px] object-cover" />
                    <div className="self-stretch h-px w-[32px] bg-blue_gray-100" />
                    <div className="flex flex-col mb-[435px]">
                      <div className="flex flex-col items-center p-2">
                        <Img src="images/img_icon_plus.svg" alt="iconplus_one" className="h-[16px] w-[16px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col py-4">
                    <div className="flex flex-col mb-2">
                      <div className="flex flex-col items-center p-2">
                        <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[16px] w-[16px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
