import { observable, action, computed } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import HomePageServices from "../../services/HomePageServices";
import { apiStatusConstants } from "../../constants/APIConstants";
import HomePageEachVideoModel from "../models/HomePageModel";
import { EachVideoObject } from "../types";

import { APIStatus } from "@ib/api-constants";

class HomePageStore {
  @observable getHomePageAPIStatus!: APIStatus;
  @observable getHomePageAPIError!: string | null;
  @observable homePageApiService: HomePageServices;
  @observable getHomePageVideosList: any;
  @observable totalVideoCount: number;
  @observable shouldShowBannerCard: boolean;

  constructor(homePageService: HomePageServices) {
    this.homePageApiService = homePageService;
    this.getHomePageVideosList = [];
    this.totalVideoCount = 0;
    this.shouldShowBannerCard = true;
  }

  @action.bound
  setHomePageAPIResponse(response: any) {
    if (response.status) {
      this.totalVideoCount = response.total;
      this.getHomePageVideosList = response.details.videos.map(
        (eachVideo: EachVideoObject) => {
          return new HomePageEachVideoModel(eachVideo);
        }
      );
    }
  }

  @action.bound
  setGetHomePageAPIStatus(apiStatus: any) {
    this.getHomePageAPIStatus = apiStatus;
  }

  @action.bound
  setHomePageAPIError(error: any) {
    this.getHomePageAPIError = error.error_msg;
  }

  @action.bound
  onChangeBannerCardStatus = () => {
    this.shouldShowBannerCard = !this.shouldShowBannerCard;
  };

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
