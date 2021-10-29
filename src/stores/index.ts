import AuthenticService from "../services/AuthenticServices";
import AuthenticStore from "./AuthenticationStore/AuthenticationStore";
import HomePageServices from "../services/HomePageServices";
import HomePageStore from "./HomePageStore/HomePageStore";
import VideoDetailsServices from "../services/VideoDetailsServices/VideoDetailsServices";
import VideoItemDetailsStore from "./VideoItemDetailsStore/VideoItemDetailsStore";

const authenticService = new AuthenticService();
const authenticStore = new AuthenticStore(authenticService);
const homePageService = new HomePageServices();
const homePageStore = new HomePageStore(homePageService);
const videoDetailsServices = new VideoDetailsServices();
const videoItemDetailsStore = new VideoItemDetailsStore(videoDetailsServices);
export default {
  authenticService,
  authenticStore,
  homePageService,
  homePageStore,
  videoItemDetailsStore,
};
