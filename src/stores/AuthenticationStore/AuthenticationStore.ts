import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { setAccessToken } from "../../utils/StorageUtils";
import AuthenticService from "../../services/AuthenticServices";
import { apiStatusConstants } from "../../constants/APIConstants";

class AuthenticStore {
  @observable getUserLogInAPIStatus: string;
  @observable getUserLogInAPIError: string | null;
  @observable shouldShowPassword: boolean;
  @observable authAPIService: AuthenticService;

  constructor(authService: AuthenticService) {
    this.shouldShowPassword = false;
    this.getUserLogInAPIStatus = apiStatusConstants.initial;
    this.getUserLogInAPIError = null;
    this.authAPIService = authService;
  }

  @action.bound
  setUserLogInAPIResponse(response: any) {
    if (response.status) {
      this.getUserLogInAPIStatus = apiStatusConstants.success;
      setAccessToken(response.details.jwt_token);
    } else {
      this.setGetUserLogInAPIError(response.details);
    }
  }

  @action.bound
  setGetUserLogInAPIStatus(apiStatus: number) {
    console.log(apiStatus);
  }

  @action.bound
  setGetUserLogInAPIError(error: any) {
    this.getUserLogInAPIError = error.error_msg;
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
