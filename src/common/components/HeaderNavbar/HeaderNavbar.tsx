import Cookies from "js-cookie";
import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { LOGIN_IN_PATH } from "../../../constants/RouteConstants";
import {
  useTranslation,
  WithTranslation,
  withTranslation,
} from "react-i18next";
import {
  HeaderNavBarWrapper,
  LogoutButton,
  NxtWatchNavLogo,
  ThemeAndLogOutContainer,
} from "./styledComponents";

interface HeaderNavbarProps extends RouteComponentProps {}

const HeaderNavbar = (props: HeaderNavbarProps) => {
  const { t } = useTranslation();
  const { history } = props;
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    history.replace(LOGIN_IN_PATH);
  };
  return (
    <HeaderNavBarWrapper>
      <NxtWatchNavLogo />
      <ThemeAndLogOutContainer>
        <LogoutButton type="button" onClick={onClickLogout}>
          {t("navbar.logout")}
        </LogoutButton>
      </ThemeAndLogOutContainer>
    </HeaderNavBarWrapper>
  );
};

export default withRouter(HeaderNavbar);
