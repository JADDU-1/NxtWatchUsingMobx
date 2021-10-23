import { observable, action, computed } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { setAccessToken } from "../../utils/StorageUtils";
import AuthenticService from "../../services";
import { apiStatusConstants } from "../../constants/APIConstants";

class AuthenticStore {
  @observable getUserLogInAPIStatus!: number;
  @observable getUserLogInAPIError!: string | null;
  @observable shouldShowPassword: boolean;
  @observable authAPIService: AuthenticService;

  constructor(authService: AuthenticService) {
    this.shouldShowPassword = false;
    this.authAPIService = authService;
  }

  @action.bound
  setUserLogInAPIResponse(response: any) {
    if (response.status) {
      setAccessToken(response.jwt_token);
    } else {
      this.setGetUserLogInAPIError(response.details);
    }
  }

  @action.bound
  setGetUserLogInAPIStatus(apiStatus: number) {
    console.log(apiStatus);
    // switch (apiStatus) {
    //   case apiStatusConstants.success:
    //     return (this.getUserLogInAPIStatus = apiStatusConstants.success);
    //   case apiStatusConstants.failure:
    //     return (this.getUserLogInAPIStatus = apiStatusConstants.failure);
    //   case apiStatusConstants.loading:
    //     return (this.getUserLogInAPIStatus = apiStatusConstants.loading);
    //   default:
    //     return null;
    // }
  }

  @action.bound
  setGetUserLogInAPIError(error: any) {
    this.getUserLogInAPIError = error.error_msg;
  }

  getUserLogIn(data: Object, onSuccess: Function) {
    const AuthPromise = this.authAPIService.LogInAPI(data);
    return bindPromiseWithOnSuccess(AuthPromise)
      .to(this.setGetUserLogInAPIStatus, (response) => {
        this.setUserLogInAPIResponse(response);
        onSuccess();
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
