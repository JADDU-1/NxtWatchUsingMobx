import { create } from "apisauce";
import Cookies from "js-cookie";
import { apiMethods } from "../../constants/APIConstants";
import { networkCallWithoutApisauce } from "../../utils/Apiutils";
import { getAccessToken } from "../../utils/StorageUtils";

class HomePageServices {
  api;
  constructor() {
    this.api = create({
      baseURL: "https://apis.ccbp.in/videos",
    });
  }

  getHomePageData = async (search: string) => {
    const JwtToken = getAccessToken();
    const url = `https://apis.ccbp.in/videos/all?search=${search}`;
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

    // return networkCallWithoutApisauce(
    //   this.api,
    //   `/all?search=${search}`,

    //   apiMethods.post
    // );
  };
}

export default HomePageServices;
