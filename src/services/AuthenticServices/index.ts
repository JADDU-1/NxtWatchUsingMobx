import { create } from "apisauce";

class AuthenticService {
  api;
  constructor() {
    this.api = create({
      baseURL: "https://apis.ccbp.in",
    });
  }

  LogInAPI = async (userDetails: Object) => {
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);

    const data = await response.json();
    const loginResponse = {
      details: data,
      status: response.ok,
    };

    return loginResponse;
  };
}

export default AuthenticService;
