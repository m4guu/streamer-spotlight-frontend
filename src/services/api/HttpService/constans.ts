import { HttpStatusCode } from "axios";
import { ErrorId } from "../../../shared/enums";

export const undefinedError = {
  message: "Something goes wrong. Please try later.",
  code: HttpStatusCode.InternalServerError,
  id: ErrorId.INTERNAL_SERVER_ERROR,
};
