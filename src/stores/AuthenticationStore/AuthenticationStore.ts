import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { setAccessToken } from "../../utils/StorageUtils";
import AuthenticService from "../../services/AuthenticServices";
import { apiStatusConstants } from "../../constants/APIConstants";
import { APIStatus } from "@ib/api-constants";
import { FetchedLoginDetailsTypes } from "../types";

class AuthenticStore {
  @observable getUserLogInAPIStatus!: APIStatus;
  @observable getUserLogInAPIError!: string;
  @observable shouldShowPassword: boolean;
  @observable authAPIService: AuthenticService;

  constructor(authService: AuthenticService) {
    this.shouldShowPassword = false;
    this.authAPIService = authService;
  }

  @action.bound
  setUserLogInAPIResponse(response: FetchedLoginDetailsTypes | null) {
    if (response?.status) {
      setAccessToken(response.details.jwt_token);
    }
  }

  @action.bound
  setGetUserLogInAPIStatus(apiStatus: number) {
    this.getUserLogInAPIStatus = apiStatus;
  }

  @action.bound
  setGetUserLogInAPIError(error: string) {
    this.getUserLogInAPIError = error;
  }

  getUserLogIn(data: Object) {
    const AuthPromise = this.authAPIService.LogInAPI(data);
    return bindPromiseWithOnSuccess(AuthPromise)
      .to(this.setGetUserLogInAPIStatus, (response) => {
        this.setUserLogInAPIResponse(response);
      })
      .catch((error) => {
        this.setGetUserLogInAPIError(error);
      });
  }

  @action.bound
  shouldShowPasswordStatus = () => {
    this.shouldShowPassword = !this.shouldShowPassword;
  };
}

export default AuthenticStore;
