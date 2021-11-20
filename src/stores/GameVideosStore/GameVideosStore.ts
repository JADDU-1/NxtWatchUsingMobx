import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import HomePageEachVideoModel from "../models/HomePageModel";
import { EachVideoObject, FetchedDataTypes } from "../types";

import { APIStatus } from "@ib/api-constants";
import GamingVideosService from "../../services/GamingVideosService/GamingVideosService";

class GameVideosStore {
  @observable getGamePageAPIStatus!: APIStatus;
  @observable getGamePageAPIError!: string | null;
  @observable gamePageApiService: GamingVideosService;
  @observable getGamePageVideosList: Array<HomePageEachVideoModel>;
  @observable totalVideoCount: number;

  constructor(gamePageApiService: GamingVideosService) {
    this.gamePageApiService = gamePageApiService;
    this.getGamePageVideosList = [];
    this.totalVideoCount = 0;
  }

  @action.bound
  setGamePageAPIResponse(response: FetchedDataTypes | null) {
    if (response?.status) {
      this.totalVideoCount = response.details.total;
      this.getGamePageVideosList = response.details.videos.map(
        (eachVideo: EachVideoObject) => {
          return new HomePageEachVideoModel(eachVideo);
        }
      );
    }
  }

  @action.bound
  setGamePageAPIStatus(apiStatus: number) {
    this.getGamePageAPIStatus = apiStatus;
  }

  @action.bound
  setGamePageAPIError(error: string) {
    this.getGamePageAPIError = error;
  }

  getGamePageData() {
    const data = this.gamePageApiService.getGamePageData();
    return bindPromiseWithOnSuccess(data)
      .to(this.setGamePageAPIStatus, (response) => {
        this.setGamePageAPIResponse(response);
      })
      .catch((error) => {
        this.setGamePageAPIError(error);
      });
  }
}

export default GameVideosStore;
