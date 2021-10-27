import Cookies from "js-cookie";
import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { LOGIN_IN_PATH } from "../../../constants/RouteConstants";
import { BsMoonFill } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";
import CommonContext from "../../../context";
import {
  useTranslation,
  WithTranslation,
  withTranslation,
} from "react-i18next";
import {
  DarkThemeIcon,
  HeaderNavBarWrapper,
  LightThemeIcon,
  LogoutButton,
  NxtWatchNavLogo,
  ProfileIcon,
  ThemeAndLogOutContainer,
  ThemeButton,
} from "./styledComponents";
import { LightTheme } from "../../../constants/CommonConstants";

interface HeaderNavbarProps extends RouteComponentProps {}

const HeaderNavbar = (props: HeaderNavbarProps) => {
  const { t } = useTranslation();
  const { history } = props;
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    history.replace(LOGIN_IN_PATH);
  };
  return (
    <CommonContext.Consumer>
      {(value) => {
        const { onChangeTheme, selectedTheme } = value;
        return (
          <HeaderNavBarWrapper>
            <NxtWatchNavLogo shouldShowNxtDarkIcon={selectedTheme} />
            <ThemeAndLogOutContainer>
              <ThemeButton onClick={onChangeTheme}>
                {selectedTheme === LightTheme ? (
                  <DarkThemeIcon />
                ) : (
                  <LightThemeIcon />
                )}
              </ThemeButton>
              <ProfileIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt={t("navbar.profileIconAltText")}
              />
              <LogoutButton
                type="button"
                onClick={onClickLogout}
                theme={selectedTheme}
              >
                {t("navbar.logout")}
              </LogoutButton>
            </ThemeAndLogOutContainer>
          </HeaderNavBarWrapper>
        );
      }}
    </CommonContext.Consumer>
  );
};

export default withRouter(HeaderNavbar);
