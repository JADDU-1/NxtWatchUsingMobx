import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { LOGIN_IN_PATH } from "../../../constants/RouteConstants";
import CommonContext from "../../../context";
import { WithTranslation, withTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import {
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  DarkThemeIcon,
  HamburgerMenuButton,
  HamburgerMenuIcon,
  HeaderNavBarWrapper,
  LightThemeIcon,
  LogoutButton,
  LogoutIcon,
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
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";

interface HeaderNavbarProps extends RouteComponentProps {}
interface HeaderNavbarProps extends WithTranslation {}

interface HeaderNavbarProps {
  onChangeMenuStatus: () => void;
}

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
    const { t, onChangeMenuStatus } = this.props;
    const { shouldShowLogoutPopUp } = this;
    return (
      <CommonContext.Consumer>
        {(value) => {
          const { onChangeTheme, selectedTheme } = value;

          return (
            <HeaderNavBarWrapper>
              <MediaQuery minWidth={769}>
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
              </MediaQuery>
              <MediaQuery maxWidth={768}>
                <NxtWatchNavLogo shouldShowNxtDarkIcon={selectedTheme} />
                <ThemeAndLogOutContainer>
                  <ThemeButton onClick={onChangeTheme}>
                    {selectedTheme === LightTheme ? (
                      <DarkThemeIcon />
                    ) : (
                      <LightThemeIcon />
                    )}
                  </ThemeButton>
                  <HamburgerMenuButton onClick={onChangeMenuStatus}>
                    <HamburgerMenuIcon theme={selectedTheme} />
                  </HamburgerMenuButton>
                  <LogoutButton
                    type="button"
                    onClick={this.onChangePopUpStatus}
                    theme={selectedTheme}
                  >
                    <LogoutIcon />
                  </LogoutButton>
                </ThemeAndLogOutContainer>
              </MediaQuery>

              {this.renderPopUpUi(selectedTheme, shouldShowLogoutPopUp)}
            </HeaderNavBarWrapper>
          );
        }}
      </CommonContext.Consumer>
    );
  }
}

export default withTranslation("translation")(withRouter(HeaderNavbar));
