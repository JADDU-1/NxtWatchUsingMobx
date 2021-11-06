import AuthenticService from "../services/AuthenticServices";
import AuthenticStore from "./AuthenticationStore/AuthenticationStore";
import HomePageServices from "../services/HomePageServices";
import HomePageStore from "./HomePageStore/HomePageStore";
import VideoDetailsServices from "../services/VideoDetailsServices/VideoDetailsServices";
import VideoItemDetailsStore from "./VideoItemDetailsStore/VideoItemDetailsStore";
import TrendingVideosStore from "./TrendingVideosStore/TrendingVideosStore";
import TrendingVideosService from "../services/TrendingVideosService/TrendingVideosService";
import GameVideosStore from "./GameVideosStore/GameVideosStore";
import GamingVideosService from "../services/GamingVideosService/GamingVideosService";

const authenticService = new AuthenticService();
const authenticStore = new AuthenticStore(authenticService);
const homePageService = new HomePageServices();
const homePageStore = new HomePageStore(homePageService);
const videoDetailsServices = new VideoDetailsServices();
const videoItemDetailsStore = new VideoItemDetailsStore(videoDetailsServices);
const trendingVideosService = new TrendingVideosService();
const trendingVideosStore = new TrendingVideosStore(trendingVideosService);
const gameVideosService = new GamingVideosService();
const gameVideosStore = new GameVideosStore(gameVideosService);

export default {
  authenticService,
  authenticStore,
  homePageService,
  homePageStore,
  videoItemDetailsStore,
  trendingVideosStore,
  gameVideosStore,
};
