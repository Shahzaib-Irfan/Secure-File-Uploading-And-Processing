import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "reducers/user_reducer";
import { useNavigate } from "react-router-dom";
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
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
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
    } catch (error) {
      dispatch({
        type: GET_CURRENT_USER_ERROR,
      });
    }
  };

  const SignUp = async (firstName, lastName, email, password) => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
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
      if (message == "Invalid credentials") {
        const response_data = await axios.post(
          "http://localhost:3005/userApi/users",
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const { token, user, redirect } = response_data.data;
        window.location.href = redirect;
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
