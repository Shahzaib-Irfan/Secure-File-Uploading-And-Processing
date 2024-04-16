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
} from "../actions";
import { useUserContext } from "./UserContext";

const initialState = {
  isSideBarOpen: false,
  files: [],
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
