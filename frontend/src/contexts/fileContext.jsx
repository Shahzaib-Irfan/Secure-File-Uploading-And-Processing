import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/file_reducer";
//import { products_url as url } from "../utils/constants";
import {
  GET_FILES_BEGIN,
  GET_FILES_SUCCESS,
  GET_FILES_ERROR,
  GET_SINGLE_FILE_BEGIN,
  GET_SINGLE_FILE_SUCCESS,
  GET_SINGLE_FILE_ERROR,
  FILE_UPLOAD_BEGIN,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_ERROR,
} from "../actions";
import { useUserContext } from "./UserContext";

const initialState = {
  isSideBarOpen: false,
  files: [],
  fileUploadLoading: false,
  homefiles: [],
  isLoading: false,
  setMode: "none",
  isError: false,
  singleFile: {},
  singleFileError: false,
  singleFileLoading: false,
};
const FilesContext = React.createContext();

export const FilesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentUser, token } = useUserContext();
  const handleSetModeUpdate = (value) => {
    dispatch({ type: "SETMODE", payload: value });
  };
  const fileVirusScan = (file) => {
    dispatch({ type: FILE_UPLOAD_BEGIN });
    const form = new FormData();

    form.append("file", file);
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "x-apikey":
          "b0d14d7d823d56f629df95e84bc78f75062bb1ee782bc358ee1e9ff08bcaf43e",
      },
    };

    options.body = form;
    let id = "";
    fetch("https://www.virustotal.com/api/v3/files", options)
      .then((response) => response.json())
      .then((response) => {
        id = response.data.id;
        console.log(response);
      })
      .catch((err) => {
        dispatch({ type: FILE_UPLOAD_ERROR });
        console.error(err);
      });
    const options_2 = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-apikey":
          "b0d14d7d823d56f629df95e84bc78f75062bb1ee782bc358ee1e9ff08bcaf43e",
      },
    };

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://www.virustotal.com/api/v3/files/";
    fetch(`${proxyUrl}${apiUrl}${id}`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => {
        dispatch({ type: FILE_UPLOAD_ERROR });
        console.error(err);
      });
    dispatch({ type: GET_FILES_SUCCESS });
  };
  const fetchFiles = async () => {
    dispatch({ type: GET_FILES_BEGIN });
    try {
      const response = await axios.get(
        "http://localhost:3005/dishApi/dishes/getDishes"
      );
      const data = await response.data;
      dispatch({ type: GET_FILES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_FILES_ERROR });
    }
  };

  const fetchFilesByEmail = async (id) => {
    dispatch({ type: GET_FILES_BEGIN });
    try {
      if (token !== "") {
        const response = await axios.get(
          `http://localhost:3005/fileApi/files/getFilesByEmail/${currentUser.email}`
        );
        const data = await response.data;
        console.log(data);
        dispatch({ type: GET_FILES_SUCCESS, payload: data });
      } else {
        dispatch({ type: GET_FILES_SUCCESS, payload: [] });
      }
    } catch (error) {
      dispatch({ type: GET_FILES_ERROR });
    }
  };
  useEffect(() => {
    fetchFilesByEmail();
  }, []);
  const fetchSingleFile = async (url) => {
    dispatch({ type: GET_SINGLE_FILE_BEGIN });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      dispatch({ type: GET_SINGLE_FILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_FILE_ERROR });
    }
  };
  return (
    <FilesContext.Provider
      value={{
        ...state,
        fetchSingleFile,
        fetchFiles,
        handleSetModeUpdate,
        fetchFilesByEmail,
        fileVirusScan,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};
// make sure use
export const useFilesContext = () => {
  return useContext(FilesContext);
};
