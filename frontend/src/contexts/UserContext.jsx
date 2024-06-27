import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "reducers/user_reducer";
import { useNavigate } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  GET_SINGLE_USER_BEGIN,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  GET_SINGLE_USER_FILE_BEGIN,
  GET_SINGLE_USER_FILE_SUCCESS,
  GET_SINGLE_USER_FILE_ERROR,
  GET_USER_FILES_BEGIN,
  GET_USER_FILES_SUCCESS,
  GET_USER_FILES_ERROR,
} from "../actions";

const sanitizeInput = (input) => {
  // Define a regular expression for allowed characters
  const whitelist = /^[a-zA-Z0-9 _@.,-]*$/;

  const keywords = [
    "script",
    "object",
    "embed",
    "applet",
    "html",
    "body",
    "title",
    "link",
    "style",
    "frame",
    "iframe",
    "frameset",
    "xml",
    "xss",
    "function",
    "console",
    "return",
  ];
  const pattern = new RegExp("\\b(?:" + keywords.join("|") + ")\\b");

  // Check if the input matches the whitelist pattern
  if (whitelist.test(input) && !pattern.test(input)) {
    return true;
  }

  // If the input doesn't match the whitelist pattern, return false
  return false;
};
const getUserFromMemory = (el) => {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    return user[el];
  } else if (el === "token") {
    return "";
  } else {
    return {};
  }
};

const initialState = {
  users: [],
  token: getUserFromMemory("token"),
  message: "",
  redirect: "",
  isLoading: false,
  isError: false,
  singleUser: {},
  singleUserLoading: false,
  singleUserError: false,
  currentUser: getUserFromMemory("currentUser"),
  singleUserFiles: [],
  formInputs: { firstName: "", lastName: "", email: "", password: "" },
  singleFile: {},
  singleFileLoading: false,
  singleFileError: false,
  currentUserError: false,
  currentUserLoading: false,
};

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const loginWithAuthentication = async (email, password) => {
    try {
      email = sanitizeHtml(email);
      password = sanitizeHtml(password);
      if (
        sanitizeInput(password) &&
        sanitizeInput(email) &&
        email != "" &&
        password != ""
      ) {
        dispatch({ type: GET_CURRENT_USER_BEGIN });

        const response = await axios.post(
          "http://localhost:3005/userApi/login",
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const { token, user, redirect } = response.data;
        dispatch({
          type: GET_CURRENT_USER_SUCCESS,
          payload: { token, user, redirect },
        });
        window.location.href = redirect;
      } else {
        alert("Invalid Input Occured");
      }
    } catch (error) {
      dispatch({
        type: GET_CURRENT_USER_ERROR,
      });
    }
  };

  const SignUp = async (firstName, lastName, email, password) => {
    try {
      email = sanitizeHtml(email);
      password = sanitizeHtml(password);
      firstName = sanitizeHtml(firstName);
      lastName = sanitizeHtml(lastName);
      if (sanitizeInput(firstName)) {
        if (sanitizeInput(lastName)) {
          if (sanitizeInput(email)) {
            if (sanitizeInput(password)) {
              dispatch({ type: GET_CURRENT_USER_BEGIN });

              const response = await axios.post(
                "http://localhost:3005/userApi/login",
                {
                  email: email,
                  password: password,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const { message } = response.data;
              console.log(message);
              if (message === "Invalid credentials") {
                const response_data = await axios.post(
                  "http://localhost:3005/userApi/users",
                  {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                  }
                );
                const { token, user, redirect } = response_data.data;
                window.location.href = redirect;
              }
            } else {
              alert("invalid Password");
            }
          } else {
            alert("invalid Email");
          }
        } else {
          alert("invalid Last Name");
        }
      } else {
        alert("Invalid First Name");
      }
    } catch (error) {
      dispatch({
        type: GET_CURRENT_USER_ERROR,
      });
    }
  };
  const logout = async () => {
    dispatch({
      type: GET_CURRENT_USER_SUCCESS,
      payload: { user: {}, token: "", redirect: "/signin" },
    });
    window.location.href = "/signin";
  };

  const fetchSingleUser = async (url) => {
    dispatch({ type: GET_SINGLE_USER_BEGIN });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SINGLE_USER_ERROR });
    }
  };
  return (
    <UserContext.Provider
      value={{
        ...state,
        loginWithAuthentication,
        logout,
        fetchSingleUser,
        SignUp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
