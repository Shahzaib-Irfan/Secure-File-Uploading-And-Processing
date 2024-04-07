import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button2, Img, Text, Input2, StatefulInput2, Heading } from "../../components";
import { Link } from 'react-router-dom';
import { useUserContext } from "contexts/UserContext";
import { stat } from "fs";

export default function SignUpPage() {
  const { SignUp } = useUserContext();
  const [state, setState] = useState({ firstName: "", lastName: "", email: "", password: "" });

  const updateState = (fieldName) => (value) => {
    setState(prevState => ({ ...prevState, [fieldName]: value }));
  };

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
                <Heading size="md" as="h1">Sign Up</Heading>
              </a>
              <Text as="p">Create your account in a seconds</Text>
            </div>
            <div className="flex flex-col self-stretch items-start mt-[35px]">
              <StatefulInput2
                shape="round"
                type="text"
                name="firstName"
                placeholder={`First Name:`}
                className="sm:pr-5"
                fieldName="firstName"
                updateState={updateState}
              />
              <StatefulInput2
                shape="round"
                type="text"
                name="lastName"
                placeholder={`Last Name:`}
                className="sm:pr-5"
                fieldName="lastName"
                updateState={updateState}
              />
              <StatefulInput2
                shape="round"
                type="text"
                name="email"
                placeholder={`Email:`}
                className="sm:pr-5"
                fieldName="email"
                updateState={updateState}
              />
              <StatefulInput2
                shape="round"
                type="password"
                name="password"
                placeholder={`password:`}
                className="sm:pr-5"
                fieldName="password"
                updateState={updateState}
              />
              <Button2 size="sm" shape="round" className="w-full mt-[34px] sm:px-5 font-bold" onClick={() => SignUp(state.firstName, state.lastName, state.email, state.password)}>
                <Text className="text-gray-600 font-large">
                Create an account
                </Text>
              </Button2>
              <Text as="p" className="mt-[39px]">
                <span className="text-gray-600">Already a member?&nbsp;</span>
                <Link className="text-deep_purple-A200 font-medium" to="/signin">Login</Link>
              </Text>
            </div>
            {/* <div className="self-stretch h-[20px] mt-[38px] relative">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
