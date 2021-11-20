import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import HomePageEachVideoModel from "../models/HomePageModel";
import { EachVideoObject, FetchedDataTypes } from "../types";

import { APIStatus } from "@ib/api-constants";
import TrendingVideosService from "../../services/TrendingVideosService/TrendingVideosService";

class TrendingVideosStore {
  @observable getTrendingPageAPIStatus!: APIStatus;
  @observable getTrendingPageAPIError!: string | null;
  @observable trendingPageApiService: TrendingVideosService;
  @observable getTrendingPageVideosList: Array<HomePageEachVideoModel>;
  @observable totalVideoCount: number;

  constructor(trendingPageService: TrendingVideosService) {
    this.trendingPageApiService = trendingPageService;
    this.getTrendingPageVideosList = [];
    this.totalVideoCount = 0;
  }

  @action.bound
  setTrendingPageAPIResponse(response: FetchedDataTypes | null) {
    if (response?.status) {
      this.totalVideoCount = response.details.total;
      this.getTrendingPageVideosList = response.details.videos.map(
        (eachVideo: EachVideoObject) => {
          return new HomePageEachVideoModel(eachVideo);
        }
      );
    }
  }

  @action.bound
  setTrendingPageAPIStatus(apiStatus: number) {
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
