import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import HomePageServices from "../../services/HomePageServices";
import HomePageEachVideoModel from "../models/HomePageModel";
import { EachVideoObject, FetchedDataTypes } from "../types";

import { API_INITIAL, APIStatus } from "@ib/api-constants";

class HomePageStore {
  @observable getHomePageAPIStatus!: APIStatus;
  @observable getHomePageAPIError!: string | null;
  @observable homePageApiService: HomePageServices;
  @observable getHomePageVideosList: Array<HomePageEachVideoModel>;
  @observable totalVideoCount: number;
  @observable shouldShowBannerCard: boolean;

  constructor(homePageService: HomePageServices) {
    this.homePageApiService = homePageService;
    this.getHomePageAPIStatus = API_INITIAL;
    this.getHomePageVideosList = [];
    this.totalVideoCount = 0;
    this.shouldShowBannerCard = true;
  }

  @action.bound
  setHomePageAPIResponse(response: FetchedDataTypes | null) {
    if (response?.status) {
      this.totalVideoCount = response.details.total;
      this.getHomePageVideosList = response.details.videos.map(
        (eachVideo: EachVideoObject) => {
          return new HomePageEachVideoModel(eachVideo);
        }
      );
    }
  }

  @action.bound
  setGetHomePageAPIStatus(apiStatus: number) {
    this.getHomePageAPIStatus = apiStatus;
  }

  @action.bound
  setHomePageAPIError(error: string) {
    this.getHomePageAPIError = error;
  }

  @action.bound
  onChangeBannerCardStatus = () => {
    this.shouldShowBannerCard = !this.shouldShowBannerCard;
  };

  @action.bound
  getHomePageData(searchString: string) {
    const data = this.homePageApiService.getHomePageData(searchString);
    return bindPromiseWithOnSuccess(data)
      .to(this.setGetHomePageAPIStatus, (response) => {
        this.setHomePageAPIResponse(response);
      })
      .catch((error) => {
        this.setHomePageAPIError(error);
      });
  }
}

export default HomePageStore;
