import { act } from "react-dom/test-utils";
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
  GET_SINGLE_FILE_BEGIN,
  GET_SINGLE_FILE_SUCCESS,
  GET_SINGLE_FILE_ERROR,
  GET_USER_FILES_BEGIN,
  GET_USER_FILES_SUCCESS,
  GET_USER_FILES_ERROR,
} from "../actions";

const user_reducer = (state, action) => {
  if (action.type === GET_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      users: action.payload,
    };
  }
  if (action.type === GET_USER_ERROR) {
    return { ...state, isError: true, isLoading: false };
  }

  if (action.type === GET_SINGLE_USER_BEGIN) {
    return { ...state, singleUserLoading: true };
  }
  if (action.type === GET_SINGLE_USER_SUCCESS) {
    return {
      ...state,
      singleUser: action.payload,
      singleUserLoading: false,
    };
  }
  if (action.type === GET_SINGLE_USER_ERROR) {
    return {
      ...state,
      singleUserError: true,
      singleUserLoading: false,
    };
  }
  if (action.type === GET_CURRENT_USER_BEGIN) {
    return { ...state, currentUserLoading: true };
  }
  if (action.type === GET_CURRENT_USER_SUCCESS) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        token: action.payload["token"],
        currentUser: action.payload["user"],
      })
    );
    return {
      ...state,
      currentUser: action.payload["user"],
      token: action.payload["token"],
      redirect: action.payload["redirect"],
      message: "",
      currentUserLoading: false,
    };
  }
  if (action.type === GET_CURRENT_USER_ERROR) {
    return {
      ...state,
      currentUserError: true,
      currentUserLoading: false,
    };
  }

  if (action.type === GET_USER_FILES_BEGIN) {
    return { ...state, isOrdersLoading: true };
  }
  if (action.type === GET_USER_FILES_SUCCESS) {
    return {
      ...state,
      isOrdersLoading: false,
      orders: action.payload,
    };
  }
  if (action.type === GET_USER_FILES_ERROR) {
    return { ...state, isOrdersError: true, isOrdersLoading: false };
  }
  if (action.type === GET_SINGLE_FILE_BEGIN) {
    return { ...state, singleUserOrdersLoading: true };
  }
  if (action.type === GET_SINGLE_FILE_SUCCESS) {
    return {
      ...state,
      singleUserOrders: action.payload,
      singleUserOrdersLoading: false,
    };
  }
  if (action.type === GET_SINGLE_FILE_ERROR) {
    return {
      ...state,
      singleUserOrdersError: true,
      singleUserOrdersLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;