import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { LOGIN_IN_PATH } from "../../../constants/RouteConstants";
import CommonContext from "../../../context";
import { WithTranslation, withTranslation } from "react-i18next";
import {
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  DarkThemeIcon,
  HeaderNavBarWrapper,
  LightThemeIcon,
  LogoutButton,
  NxtWatchNavLogo,
  PopUpContainer,
  PopUpDescription,
  ProfileIcon,
  ThemeAndLogOutContainer,
  ThemeButton,
} from "./styledComponents";
import { LightTheme } from "../../../constants/CommonConstants";
import { clearUserSession } from "../../../utils/StorageUtils";
import { observable } from "mobx";
import { observer } from "mobx-react";

interface HeaderNavbarProps extends RouteComponentProps {}
interface HeaderNavbarProps extends WithTranslation {}

@observer
class HeaderNavbar extends Component<HeaderNavbarProps> {
  @observable shouldShowLogoutPopUp: boolean = false;

  onClickLogout = () => {
    const { history } = this.props;
    clearUserSession();
    history.replace(LOGIN_IN_PATH);
  };

  onChangePopUpStatus = () => {
    this.shouldShowLogoutPopUp = !this.shouldShowLogoutPopUp;
  };

  renderPopUpUi = (selectedTheme: string, shouldShowLogoutPopUp: boolean) => (
    <>
      {shouldShowLogoutPopUp && (
        <PopUpContainer theme={selectedTheme}>
          <PopUpDescription theme={selectedTheme}>
            Are you sure, you want to logout?
          </PopUpDescription>
          <ButtonsContainer>
            <CancelButton
              onClick={this.onChangePopUpStatus}
              theme={selectedTheme}
            >
              Cancel
            </CancelButton>
            <ConfirmButton onClick={this.onClickLogout}>Confirm</ConfirmButton>
          </ButtonsContainer>
        </PopUpContainer>
      )}
    </>
  );

  render() {
    const { t } = this.props;
    const { shouldShowLogoutPopUp } = this;
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
                  onClick={this.onChangePopUpStatus}
                  theme={selectedTheme}
                >
                  {t("navbar.logout")}
                </LogoutButton>
              </ThemeAndLogOutContainer>
              {this.renderPopUpUi(selectedTheme, shouldShowLogoutPopUp)}
            </HeaderNavBarWrapper>
          );
        }}
      </CommonContext.Consumer>
    );
  }
}

export default withTranslation("translation")(withRouter(HeaderNavbar));
