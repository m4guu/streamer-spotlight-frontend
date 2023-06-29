import { HttpStatusCode } from "axios";
import { CustomError } from "../../../shared/interfaces";
import { ErrorId } from "../../../shared/enums";

export const mockError: CustomError = {
  message: "An error occurred",
  code: HttpStatusCode.InternalServerError,
  id: ErrorId.INTERNAL_SERVER_ERROR,
};
