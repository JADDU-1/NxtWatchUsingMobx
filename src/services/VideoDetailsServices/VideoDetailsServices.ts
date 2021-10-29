import { create } from "apisauce";
import { apiMethods } from "../../constants/APIConstants";
import { getAccessToken } from "../../utils/StorageUtils";

class VideoDetailsServices {
  api;
  constructor() {
    this.api = create({
      baseURL: "https://apis.ccbp.in/videos",
    });
  }

  getSelectedVideoDetails = async (id: string) => {
    const JwtToken = getAccessToken();
    const url = `https://apis.ccbp.in/videos/${id}`;
    const options = {
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
      method: apiMethods.get,
    };
    const response = await fetch(url, options);

    const data = await response.json();
    const fetchedData = {
      details: data,
      status: response.ok,
    };

    return fetchedData;
  };
}

export default VideoDetailsServices;
