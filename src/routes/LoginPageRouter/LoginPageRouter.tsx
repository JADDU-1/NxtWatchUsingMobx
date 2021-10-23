import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import LoginForm from "../../components/LoginForm";
import AuthenticStore from "../../stores/AuthenticationStore/AuthenticationStore";
import { RouteComponentProps } from "react-router-dom";
import { LoginScreenContainer } from "./styledComponents";
import { WithTranslation, withTranslation } from "react-i18next";
import { HOME_PAGE_PATH } from "../../constants/RouteConstants";

interface PropsType extends RouteComponentProps {}
interface PropsType extends WithTranslation {}
interface InjectedProps extends PropsType {
  authenticStore: AuthenticStore;
}

@inject("authenticStore")
@observer
class LoginPageRoute extends Component<PropsType> {
  @observable username: string = "";
  @observable password: string = "";
  @observable usernameError: string = "";
  @observable passwordError: string = "";

  getInjectedProps = (): InjectedProps => this.props as InjectedProps;

  getAuthStore = () => {
    return this.getInjectedProps().authenticStore;
  };

  @action.bound
  onChangeUserName = (name: string) => {
    this.username = name;
  };

  @action.bound
  onChangePassword = (password: string) => {
    this.password = password;
  };

  @action.bound
  onLogInSuccess() {
    const { history } = this.props;
    history.replace(HOME_PAGE_PATH);
  }

  @action.bound
  onSubmitCredentials = () => {
    const { t } = this.props;
    const name = this.username;
    const password = this.password;
    if (name === "" && password === "") {
      this.usernameError = t("loginPage.userNameErrorMessage");
      this.passwordError = t("loginPage.passwordErrorMessage");
    } else if (name === "") {
      this.usernameError = t("loginPage.userNameErrorMessage");
    } else if (password === "") {
      this.passwordError = t("loginPage.passwordErrorMessage");
    } else {
      this.usernameError = "";
      this.passwordError = "";
      this.getAuthStore().getUserLogIn(
        {
          username: name,
          password: password,
        },
        this.onLogInSuccess
      );
    }
  };

  render() {
    const {
      shouldShowPasswordStatus,
      shouldShowPassword,
      getUserLogInAPIError,
      getUserLogInAPIStatus,
    } = this.getAuthStore();

    return (
      <LoginScreenContainer>
        <LoginForm
          username={this.username}
          password={this.password}
          shouldShowPasswordStatus={shouldShowPasswordStatus}
          shouldShowPassword={shouldShowPassword}
          usernameError={this.usernameError}
          passwordError={this.passwordError}
          onChangeUserName={this.onChangeUserName}
          onChangePassword={this.onChangePassword}
          onSubmitCredentials={this.onSubmitCredentials}
          getUserLogInAPIError={getUserLogInAPIError}
        />
      </LoginScreenContainer>
    );
  }
}

// export default withTranslation("translation", { withRef: true })(LoginPage);

export default withTranslation()(LoginPageRoute);
