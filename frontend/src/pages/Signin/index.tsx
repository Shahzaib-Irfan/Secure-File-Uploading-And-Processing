import React from "react";
import { Helmet } from "react-helmet";
import { Button2, Img, Text, Input2, Heading } from "../../components";

export default function SigninPage() {
  return (
    <>
      <Helmet>
        <title>IncogFiles</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full bg-white-A700">
        <div className="flex md:flex-col justify-between items-center w-[94%] md:w-full gap-5 md:p-5">
          <Img src="images/img_rectangle_1.png" alt="image" className="w-[57%] md:w-full object-cover" />
          <div className="flex flex-col items-center w-[31%] md:w-full">
            <div className="flex flex-col self-start items-start gap-[11px]">
              <a href="#">
                <Heading as="h1">Sign in</Heading>
              </a>
              <Text as="p">Create your account in a seconds</Text>
            </div>
            <div className="flex flex-col self-stretch items-start mt-[35px]">
              <Input2 shape="round" type="text" name="firstName" placeholder={`First Name:`} className="sm:pr-5" />
              <Input2
                shape="round"
                type="text"
                name="lastName"
                placeholder={`Last Name:`}
                className="mt-[33px] sm:pr-5"
              />
              <Input2
                shape="round"
                type="email"
                name="email"
                placeholder={`Email Address:`}
                className="mt-[22px] sm:pr-5"
              />
              <Input2
                shape="round"
                type="password"
                name="password"
                placeholder={`Create Password:`}
                className="mt-[33px] sm:pr-5"
              />
              {/* <CheckBox
                name="checkmark"
                label="I agree to the terms and privacy policy"
                id="checkmark"
                className="mt-[51px] gap-1.5 py-[5px] text-gray-600 text-left text-base"
              /> */}
              <Button2 size="xs" shape="round" className="w-full mt-[34px] sm:px-5 font-bold">
                Create an account
              </Button2>
              <Text as="p" className="mt-[39px]">
                <span className="text-gray-600">Already a member?&nbsp;</span>
                <span className="text-deep_purple-A200 font-medium">Login</span>
              </Text>
            </div>
            <div className="self-stretch h-[20px] mt-[38px] relative">
              <a href="#" className="w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Text as="p">Or continue with</Text>
              </a>
              <div className="h-px w-full top-[8.91px] right-0 left-0 m-auto bg-blue_gray-100 absolute" />
            </div>
            <div className="flex mt-[49px] gap-4">
              <Button2 shape="square">
                <Img src="images/img_google.png" />
              </Button2>
              <Button2 shape="square">
                <Img src="images/img_facebook.png" />
              </Button2>
              <Button2 shape="square">
                <Img src="images/img_instagram.png" />
              </Button2>
              <Button2 shape="square">
                <Img src="images/img_twitter.png" />
              </Button2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
