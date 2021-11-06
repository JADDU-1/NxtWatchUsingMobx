import { observable, action, computed } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import HomePageEachVideoModel from "../models/HomePageModel";
import { EachVideoObject } from "../types";

import { APIStatus } from "@ib/api-constants";
import GamingVideosService from "../../services/GamingVideosService/GamingVideosService";

class GameVideosStore {
  @observable getGamePageAPIStatus!: APIStatus;
  @observable getGamePageAPIError!: string | null;
  @observable gamePageApiService: GamingVideosService;
  @observable getGamePageVideosList: any;
  @observable totalVideoCount: number;

  constructor(gamePageApiService: GamingVideosService) {
    this.gamePageApiService = gamePageApiService;
    this.getGamePageVideosList = [];
    this.totalVideoCount = 0;
  }

  @action.bound
  setGamePageAPIResponse(response: any) {
    if (response.status) {
      this.totalVideoCount = response.total;
      this.getGamePageVideosList = response.details.videos.map(
        (eachVideo: EachVideoObject) => {
          return new HomePageEachVideoModel(eachVideo);
        }
      );
    }
  }

  @action.bound
  setGamePageAPIStatus(apiStatus: any) {
    this.getGamePageAPIStatus = apiStatus;
  }

  @action.bound
  setGamePageAPIError(error: any) {
    this.getGamePageAPIError = error.error_msg;
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
