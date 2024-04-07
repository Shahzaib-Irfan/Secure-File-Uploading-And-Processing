import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button2, Text, Input2, Heading } from "../../components";
import {Link} from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>IncogFiles</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col justify-between items-start w-full pr-[92px] gap-5 md:pr-5 bg-white-A700">
        <Img src="images/img_rectangle_1.png" alt="image" className="w-[57%] md:w-full object-cover" />
        <div className="flex flex-col items-center w-[31%] md:w-full mt-[88px]">
          <a href="Login" target="_blank" rel="noreferrer" className="self-start">
            <Heading size = "md" as="h1">Login</Heading>
          </a>
          <Text as="p" className="self-start mt-3.5">
            Login your account in a seconds
          </Text>
          <div className="self-stretch mt-[17px]">
            <div className="flex flex-col items-start">
              <Input2 shape="round" type="email" name="email" placeholder={`Email Address`} className="sm:pr-5" />
              <Input2
                shape="round"
                type="password"
                name="password"
                placeholder={`Password`}
                className="mt-[33px] sm:pr-5"
              />
              <div className="flex self-stretch justify-between items-center mt-[50px] gap-5">
                <Text as="p" className="self-end mb-[3px] !text-deep_purple-A200">
                  Forget password?
                </Text>
              </div>
              <Button2 size="xs" shape="round" className="w-full mt-[34px] sm:px-5 font-bold">
                Log in
              </Button2>
              <Text as="p" className="mt-[39px]">
                <span className="text-gray-600">Don’t have an account?&nbsp;</span>
                <Link to = '/signup'>
                  <span className="text-deep_purple-A200 font-medium">Sign up</span>
                </Link>
                
              </Text>
            </div>
          </div>
          <div className="self-stretch h-[20px] mt-[38px] relative">
            <a href="#" className="w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Text as="p">Or continue with</Text>
            </a>
            <div className="h-px w-full top-[8.91px] right-0 left-0 m-auto bg-blue_gray-100 absolute" />
          </div>
          <div className="flex justify-center w-[76%] md:w-full mt-[49px] gap-4 md:p-5">
            <Button2 shape="square">
              <Img src="images/img_google.png" />
            </Button2>
            <Button2 shape="square">
              <Img src="images/img_facebook.png" />
            </Button2>
            <Img src="images/img_instagram.png" alt="instagram_one" className="w-[22%] object-cover rounded-[10px]" />
            <Img src="images/img_twitter.png" alt="twitter_one" className="w-[22%] object-cover rounded-[11px]" />
          </div>
        </div>
      </div>
    </>
  );
}
