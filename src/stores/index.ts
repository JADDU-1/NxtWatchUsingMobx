import AuthenticService from "../services/AuthenticServices";
import AuthenticStore from "./AuthenticationStore/AuthenticationStore";
import HomePageServices from "../services/HomePageServices";
import HomePageStore from "./HomePageStore/HomePageStore";

const authenticService = new AuthenticService();
const authenticStore = new AuthenticStore(authenticService);
const homePageService = new HomePageServices();
const homePageStore = new HomePageStore(homePageService);
export default {
  authenticService,
  authenticStore,
  homePageService,
  homePageStore,
};
