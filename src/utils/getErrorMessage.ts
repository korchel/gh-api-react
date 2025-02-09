import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError
): string => {
  if ("status" in error) {
    if (error.status === "FETCH_ERROR") {
      return "A connection error happened";
    }
    if (error.status === 404) {
      return "There is no such user. Try to change your request";
    }
  }
  return "Something went wrong. Try again later.";
};
