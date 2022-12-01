import httpStatusCodes from "./HttpCodes";
import ErrorHandler from "./ErrorHandler";

export default class Error404 extends ErrorHandler {
  constructor(description: string) {
    super(httpStatusCodes.NOT_FOUND, description);
  }
}
