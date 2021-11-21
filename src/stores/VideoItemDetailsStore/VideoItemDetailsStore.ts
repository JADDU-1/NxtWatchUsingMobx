import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus } from "@ib/api-constants";
import VideoDetailsServices from "../../services/VideoDetailsServices/VideoDetailsServices";
import VideoDetailsModel from "../models/VideoDetailsModel/VideoDetailsModel";
import { FetchedDataVideoDetailsTypes } from "../types";

class VideoItemDetailsStore {
  @observable getVideoDetailsAPIStatus!: APIStatus;
  @observable getVideoDetailsAPIError!: string;
  @observable videoDetailsApiService: VideoDetailsServices;
  @observable getVideoDetails!: VideoDetailsModel;

  constructor(videoDetailsService: VideoDetailsServices) {
    this.videoDetailsApiService = videoDetailsService;
  }

  @action.bound
  setVideoDetailsAPIResponse(response: FetchedDataVideoDetailsTypes | null) {
    if (response?.status) {
      this.getVideoDetails = new VideoDetailsModel(response.details);
    }
  }

  @action.bound
  setVideoDetailsAPIStatus(apiStatus: number) {
    this.getVideoDetailsAPIStatus = apiStatus;
  }

  @action.bound
  setVideoDetailsAPIError(error: string) {
    this.getVideoDetailsAPIError = error;
  }

  getVideoDetailsPageData(id: string) {
    const data = this.videoDetailsApiService.getSelectedVideoDetails(id);
    return bindPromiseWithOnSuccess(data)
      .to(this.setVideoDetailsAPIStatus, (response) => {
        this.setVideoDetailsAPIResponse(response);
      })
      .catch((error) => {
        this.setVideoDetailsAPIError(error);
      });
  }
}

export default VideoItemDetailsStore;
