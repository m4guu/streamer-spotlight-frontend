import { ErrorId } from "../../enums";
import { HttpStatusCode } from "axios";

interface CustomError {
  message: string;
  code: HttpStatusCode;
  id: ErrorId;
}

export default CustomError;
