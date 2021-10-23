import AuthenticService from "../services/index";
import AuthenticStore from "./AuthenticationStore/AuthenticationStore";

const authenticService = new AuthenticService();
const authenticStore = new AuthenticStore(authenticService);
export default {
  authenticService,
  authenticStore,
};
