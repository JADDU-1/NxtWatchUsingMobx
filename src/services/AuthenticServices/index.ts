import { create } from "apisauce";

class AuthenticService {
  api;
  constructor() {
    this.api = create({
      baseURL: "https://apis.ccbp.in",
    });
  }

  LogInAPI = async (userDetails: Object) => {
    //const userDetails = JSON.stringify(details);
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    console.log(response);
    const data = await response.json();
    const loginResponse = {
      details: data,
      status: response.ok,
    };

    return loginResponse;

    // return networkCallWithoutApisauce(
    //   this.api,
    //   "/login",
    //   userDetails,
    //   apiMethods.post
    // );
  };
}

export default AuthenticService;
