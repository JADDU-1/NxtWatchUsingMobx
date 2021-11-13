import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import EachSideBarOption from "../EachSideBarOption/EachSideBarOption";
import sideBarOptionsList from "./sideBarOptionList.json";
import {
  GAMING_PAGE_PATH,
  HOME_PAGE_PATH,
  SAVED_VIDEOS_PAGE,
  TRENDING_VIDEOS_PAGE,
} from "../../../constants/RouteConstants";
import {
  SideNavBarContainer,
  OptionsContainer,
  ContactUsSectionContainer,
  EnjoyRecommendationsText,
  ContactUsTitle,
  SocialMediaIcon,
} from "./stylesComponents";
import CommonContext from "../../../context";
import {
  GamingPage,
  HomePage,
  SavedVideosPage,
  TrendingVideosPage,
} from "../../../constants/CommonConstants";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface SideNavBarProps extends RouteComponentProps {}

interface SideNavBarProps extends WithTranslation {}
interface SideNavBarProps {
  shouldShowMenuPopUp: boolean;
  onChangeMenuStatus: () => void;
}

const SideNavBar = (props: SideNavBarProps) => {
  const { t } = props;
  const { history, shouldShowMenuPopUp, onChangeMenuStatus } = props;

  return (
    <CommonContext.Consumer>
      {(value) => {
        const { selectedTheme } = value;

        const { pathname } = history.location;
        return (
          <SideNavBarContainer
            shouldShowMenuPopUp={shouldShowMenuPopUp}
            theme={selectedTheme}
          >
            <OptionsContainer>
              {sideBarOptionsList.map((eachOption) => (
                <EachSideBarOption
                  key={eachOption.id}
                  selectedTheme={selectedTheme}
                  selectedPage={pathname}
                  eachOptionDetails={eachOption}
                  onChangeMenuStatus={onChangeMenuStatus}
                />
              ))}
            </OptionsContainer>
            <ContactUsSectionContainer>
              <ContactUsTitle theme={selectedTheme}>
                {t("navbar.contactUs")}
              </ContactUsTitle>
              <SocialMediaIcon
                alt="facebook"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <SocialMediaIcon
                alt="twitter"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
              />
              <SocialMediaIcon
                alt="linkedIn"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
              <EnjoyRecommendationsText theme={selectedTheme}>
                {t("navbar.enjoyRecommendationsText")}
              </EnjoyRecommendationsText>
            </ContactUsSectionContainer>
          </SideNavBarContainer>
        );
      }}
    </CommonContext.Consumer>
  );
};

export default withTranslation("translation")(withRouter(SideNavBar));
