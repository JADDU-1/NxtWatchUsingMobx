import { create } from "apisauce";
import { apiMethods } from "../../constants/APIConstants";
import { getAccessToken } from "../../utils/StorageUtils";

class TrendingVideosService {
  api;
  constructor() {
    this.api = create({
      baseURL: "https://apis.ccbp.in/videos",
    });
  }

  getTrendingPageData = async () => {
    const JwtToken = getAccessToken();
    const url = `https://apis.ccbp.in/videos/trending`;
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

export default TrendingVideosService;
