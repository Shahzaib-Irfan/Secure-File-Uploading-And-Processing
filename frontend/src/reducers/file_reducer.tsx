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

const file_reducer = (state, action) => {
  if (action.type === FILE_UPLOAD_BEGIN) {
    return { ...state, fileUploadLoading: true };
  }
  if (action.type === FILE_UPLOAD_SUCCESS || action.type === FILE_UPLOAD_ERROR) {
    return { ...state, fileUploadLoading: false};
  }
  if (action.type === GET_FILES_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_FILES_SUCCESS) {
    return { ...state, isLoading: false, files: action.payload};
  }
  if (action.type === GET_FILES_ERROR) {
    return { ...state, isError: true, isLoading: false };
  }
  if (action.type === GET_SINGLE_FILE_BEGIN) {
    return { ...state, singleFileLoading: true };
  }
  if (action.type === GET_SINGLE_FILE_SUCCESS) {
    return {
      ...state,
      singleFile: action.payload,
      singleFileLoading: false,
    };
  }
  if (action.type === "SETMODE") {
    return { ...state, setMode: action.payload };
  }
  if (action.type === GET_SINGLE_FILE_ERROR) {
    return { ...state, singleFileError: true, singleFileLoading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default file_reducer;