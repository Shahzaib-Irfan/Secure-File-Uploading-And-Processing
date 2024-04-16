import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import AWS from "aws-sdk";
import { S3Client, GetObjectCommand, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand, CopyObjectCommand} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button } from "../../components";
import Header from "../../components/Header";
import MacBookProOneImage from "../../components/MacBookProOneImage";
import MacBookProOneRowiconlistul from "../../components/MacBookProOneRowiconlistul";
import { useUserContext } from "contexts/UserContext";
import { useFilesContext } from "contexts/fileContext";

export default function Home() {
  const fileInputRef = useRef(null);
  const {currentUser, token} = useUserContext();
  const {files, fetchFilesByEmail} = useFilesContext();

// Instantiate S3 client
  const s3Client = new S3Client({
    region: process.env.REACT_APP_AWS_REGION,
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    },
  });
  useEffect(() =>{
    fetchFilesByEmail();
  }, [])
  const handleFileChange = async (event) => {
  const file = event.target.files[0];
  console.log(file);
  if (!file) return;

  try {
    const currentDatetime = new Date().toISOString().replace(/[-:.]/g, '');

    const filenameWithDatetime = `${currentDatetime}_${file.name}`;
    const params = {
      Bucket: "incog-files.dev",
      Key: "uploads/" + filenameWithDatetime,
      Body: file,
      ContentType: "image/jpeg", // Set content type to "image/jpeg" for JPEG images
    };

    const data = await s3Client.send(new PutObjectCommand(params));

    const url = await putObject(filenameWithDatetime);
    const get_url = await getObject(filenameWithDatetime);
    
    {token !== "" &&  axios.post('http://localhost:3005/fileApi/files', {
    fileLink: get_url,
    fileName: filenameWithDatetime,
    userEmail: currentUser.email,
  })
  .catch(error => {
    console.error("Error uploading file to backend:", error);
  });
  fetchFilesByEmail();
}
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};


async function putObject(fileName)
{
    const command = new PutObjectCommand({
        Bucket: "incog-files.dev",
        Key: "uploads/" + fileName,
    })

    const url = await getSignedUrl(s3Client, command);
    return url;
}

async function getObject(filename)
{
    const command = new GetObjectCommand({
        Bucket: "incog-files.dev",
        Key: "uploads/" + filename,
    })
    const url = await getSignedUrl(s3Client, command)
    // getSignedUrl(s3Client, command, {expiresIn: 20}) 20 seconds
    return url
}

  const handleButtonClick = () => {
    // Trigger file input click
    fileInputRef.current.click();
  };
  return (
    <>
      <Helmet>
        <title>IncogFiles</title>
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
              <div className="flex justify-between items-center w-[49%] h-[100%] md:w-full gap-5 p-2.5">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <button
                  onClick={handleButtonClick}
                  className="flex flex-row w-[100%] h-[100%] justify-center items-center rounded-lg bg-neutral-200 shadow-md"
                >
                  <img src="images/img_icon_plus.svg" alt="iconplus_one" className="h-[16px] w-[16px]" />
                  <h4 className="mr-[13px] margin-left: px-3 md:mr-0 text-gray-600_01">New</h4>
                </button>
              </div>
              <Button leftIcon = {<Img src="images/img_time.svg" alt="time_one" className="h-[16px] w-[16px] ml-[13px] md:ml-0" />} rightIcon = {<Heading size="md" as="h4" className="mr-[13px] md:mr-0 !text-gray-600_01">
                  Recent
                </Heading>} className="flex justify-between items-center w-[49%] md:w-full gap-5 p-2.5">
              </Button>
              <Button leftIcon = {<Img src="images/img_icon_star_o.svg" alt="image_one" className="h-[16px] w-[16px] ml-[13px] md:ml-0" />} rightIcon = {<Heading size="md" as="h5" className="mr-[13px] md:mr-0 !text-gray-600_01">
                  Starred
                </Heading>} className="flex justify-between items-center w-[51%] md:w-full gap-5 p-2.5">
                
              </Button>
              <Button leftIcon = {<Img
                  src="images/img_icon_trash.svg"
                  alt="icontrash_one"
                  className="h-[16px] w-[16px] ml-[13px] md:ml-0"
                />} rightIcon = {<Heading size="md" as="h6" className="mr-[13px] md:mr-0 !text-gray-600_01">
                  Trash
                </Heading>} className="flex justify-between items-center w-[46%] md:w-full gap-5 p-2.5">
              </Button>
            </div>
            <div className="md:self-stretch md:p-5 flex-1">
              <div className="flex justify-between items-center gap-5 p-4 border-indigo-50 border-b border-solid bg-white-A700">
                <Button leftIcon = {<Text size="s" as="p" className="self-end !text-blue_gray-900">
                    My Drive
                  </Text>} rightIcon = {<Img
                    src="images/img_icon_caret_bottom_blue_gray_900.svg"
                    alt="iconcaret_three"
                    className="h-[16px] w-[16px]"
                  />} className="flex items-center ml-2 gap-2 md:ml-0">
                </Button>
                <MacBookProOneRowiconlistul
                  iconlistulOne="images/img_icon_list_ul.svg"
                  className="flex items-center mr-1 gap-2 md:mr-0"
                />
              </div>
              <div className="flex md:flex-col justify-center items-start gap-6">
                <div className="flex flex-col md:self-stretch mt-4 flex-1">
                  <div className="flex justify-between gap-5">
                    {/* <div className="flex">
                      <Heading size="s" as="h6" className="!text-gray-600_01">
                        Folders
                      </Heading>
                    </div> */}
                    <div className="flex items-center gap-2.5">
                      <Heading size="s" as="h6" className="!text-gray-600_01">
                        Name
                      </Heading>
                      <Img src="images/img_icon_order_arrow_up.svg" alt="iconorder_one" className="h-[16px] w-[16px]" />
                    </div>
                  </div>
                  <div className="flex mt-12 py-px">
                    <Heading size="s" as="h6" className="!text-gray-600_01">
                      Files
                    </Heading>
                  </div>
                  <div className="mt-4 gap-6 grid-cols-[repeat(auto-fill,_minmax(234px_,_1fr))] grid">
                    {files.map((file) =>{
                      return (
                        <div className="flex w-full">
                          <div className="w-full shadow-xs rounded">
                            <MacBookProOneImage fileLink={file.fileLink} />
                            <div className="p-2 bg-white-A700">
                              <div className="my-1">
                                <div className="flex justify-end">
                                  <div className="flex">
                                    <Heading as="p" className="self-end">
                                      {file.fileName.slice(20, file.fileName.length)}
                                    </Heading>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  })}
                  </div>
                </div>
                {/* <div className="flex flex-col items-center w-[6%] md:w-full px-4 border-indigo-50 border-l border-solid bg-white-A700">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
