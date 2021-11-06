import { observable, action, computed } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import HomePageServices from "../../services/HomePageServices";
import { apiStatusConstants } from "../../constants/APIConstants";
import HomePageEachVideoModel from "../models/HomePageModel";
import { EachVideoObject } from "../types";

import { APIStatus } from "@ib/api-constants";
import TrendingVideosService from "../../services/TrendingVideosService/TrendingVideosService";

class TrendingVideosStore {
  @observable getTrendingPageAPIStatus!: APIStatus;
  @observable getTrendingPageAPIError!: string | null;
  @observable trendingPageApiService: TrendingVideosService;
  @observable getTrendingPageVideosList: any;
  @observable totalVideoCount: number;

  constructor(trendingPageService: TrendingVideosService) {
    this.trendingPageApiService = trendingPageService;
    this.getTrendingPageVideosList = [];
    this.totalVideoCount = 0;
  }

  @action.bound
  setTrendingPageAPIResponse(response: any) {
    if (response.status) {
      this.totalVideoCount = response.total;
      this.getTrendingPageVideosList = response.details.videos.map(
        (eachVideo: EachVideoObject) => {
          return new HomePageEachVideoModel(eachVideo);
        }
      );
    }
  }

  @action.bound
  setTrendingPageAPIStatus(apiStatus: any) {
    this.getTrendingPageAPIStatus = apiStatus;
  }

  @action.bound
  setTrendingPageAPIError(error: any) {
    this.getTrendingPageAPIError = error.error_msg;
  }

  getTrendingPageData() {
    const data = this.trendingPageApiService.getTrendingPageData();
    return bindPromiseWithOnSuccess(data)
      .to(this.setTrendingPageAPIStatus, (response) => {
        this.setTrendingPageAPIResponse(response);
      })
      .catch((error) => {
        this.setTrendingPageAPIError(error);
      });
  }
}

export default TrendingVideosStore;
