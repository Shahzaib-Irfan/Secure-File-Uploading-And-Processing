import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/dish_reducer";
//import { products_url as url } from "../utils/constants";
import {
  GET_FILES_BEGIN,
  GET_FILES_SUCCESS,
  GET_FILES_ERROR,
  GET_SINGLE_FILE_BEGIN,
  GET_SINGLE_FILE_SUCCESS,
  GET_SINGLE_FILE_ERROR,
} from "../actions";

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

  const fetchFilesByRID = async (id) => {
    dispatch({ type: GET_FILES_BEGIN });
    try {
      const response = await axios.get(
        `http://localhost:3005/dishApi/dishes/getDishesByRID/${id}`
      );
      const data = await response.data;
      dispatch({ type: GET_FILES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_FILES_ERROR });
    }
  };
  useEffect(() => {
    fetchFiles();
  }, []);
  const fetchSingleDish = async (url) => {
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
        fetchFilesByRID,
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
