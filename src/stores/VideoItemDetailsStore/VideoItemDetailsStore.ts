import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus } from "@ib/api-constants";
import VideoDetailsServices from "../../services/VideoDetailsServices/VideoDetailsServices";
import VideoDetailsModel from "../models/VideoDetailsModel/VideoDetailsModel";

class VideoItemDetailsStore {
  @observable getVideoDetailsAPIStatus!: APIStatus;
  @observable getVideoDetailsAPIError!: string | null;
  @observable videoDetailsApiService: VideoDetailsServices;
  @observable getVideoDetails: any;

  constructor(videoDetailsService: VideoDetailsServices) {
    this.videoDetailsApiService = videoDetailsService;
    this.getVideoDetails = {};
  }

  @action.bound
  setVideoDetailsAPIResponse(response: any) {
    if (response.status) {
      this.getVideoDetails = new VideoDetailsModel(response.details);
    }
  }

  @action.bound
  setVideoDetailsAPIStatus(apiStatus: any) {
    this.getVideoDetailsAPIStatus = apiStatus;
  }

  @action.bound
  setVideoDetailsAPIError(error: any) {
    this.getVideoDetailsAPIError = error.error_msg;
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
