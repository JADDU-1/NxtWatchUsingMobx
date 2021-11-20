import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import InputFieldWithLabel from "../../common/components/InputField/InputField";
import { WithTranslation, withTranslation } from "react-i18next";

import {
  LoginFormContainer,
  ShowShowPasswordContainer,
  Checkbox,
  ShouldShowPasswordLabel,
  Form,
  LoginButton,
  LoginError,
  NxtLogo,
  NxtLogoContainer,
} from "./stylesComponents";
import NxtWatchLogo from "../../common/components/NXTWatchLogo/NXTWatchLogo";
import { API_FETCHING } from "@ib/api-constants";
import LoaderComponent from "../../common/components/Loader/Loader";

interface LoginFormProps extends WithTranslation {
  username: string;
  password: string;
  shouldShowPasswordStatus: () => void;
  shouldShowPassword: boolean;
  onChangeUserName: Function;
  onChangePassword: Function;
  onSubmitCredentials: () => void;
  usernameError: string;
  passwordError: string;
  getUserLogInAPIError: string | null;
  getUserLogInAPIStatus: number;
}

const LoginForm = (props: LoginFormProps) => {
  const { t } = props;
  const {
    username,
    password,
    usernameError,
    passwordError,
    shouldShowPasswordStatus,
    shouldShowPassword,
    onChangeUserName,
    onChangePassword,
    onSubmitCredentials,
    getUserLogInAPIError,
    getUserLogInAPIStatus,
  } = props;

  const getUserName = (value: string) => {
    onChangeUserName(value);
  };

  const getPassword = (value: string) => {
    onChangePassword(value);
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitCredentials();
  };

  return (
    <LoginFormContainer>
      <NxtWatchLogo />
      <Form onSubmit={onSubmitForm}>
        <InputFieldWithLabel
          errorMessage={usernameError}
          fieldType={t("loginPage.textFieldType")}
          onChangeFunction={getUserName}
          placeHolderText={t("loginPage.userNamePlaceholder")}
          labelText={t("loginPage.userNameLabel")}
        />
        <InputFieldWithLabel
          errorMessage={passwordError}
          fieldType={
            shouldShowPassword
              ? t("loginPage.textFieldType")
              : t("loginPage.passwordFieldType")
          }
          onChangeFunction={getPassword}
          placeHolderText={t("loginPage.passwordPlaceholder")}
          labelText={t("loginPage.passwordLabel")}
        />
        <ShowShowPasswordContainer>
          <Checkbox
            type={t("loginPage.checkboxFieldType")}
            onChange={shouldShowPasswordStatus}
          />
          <ShouldShowPasswordLabel>
            {t("loginPage.showPasswordLabel")}
          </ShouldShowPasswordLabel>
        </ShowShowPasswordContainer>
        <LoginButton type={t("loginPage.loginButtonType")}>
          {getUserLogInAPIStatus === API_FETCHING ? (
            <LoaderComponent />
          ) : (
            t("loginPage.loginButton")
          )}
        </LoginButton>
        <LoginError>{getUserLogInAPIError && getUserLogInAPIError}</LoginError>
      </Form>
    </LoginFormContainer>
  );
};

export default withTranslation()(LoginForm);
