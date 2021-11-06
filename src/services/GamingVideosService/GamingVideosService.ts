import { create } from "apisauce";
import { apiMethods } from "../../constants/APIConstants";
import { getAccessToken } from "../../utils/StorageUtils";

class GamingVideosService {
  api;
  constructor() {
    this.api = create({
      baseURL: "https://apis.ccbp.in/videos",
    });
  }

  getGamePageData = async () => {
    const JwtToken = getAccessToken();
    const url = `https://apis.ccbp.in/videos/gaming`;
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

export default GamingVideosService;
