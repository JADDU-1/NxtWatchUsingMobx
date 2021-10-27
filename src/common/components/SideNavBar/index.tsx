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

interface SideNavBarProps extends WithTranslation {}

const SideNavBar = (props: SideNavBarProps) => {
  const { t } = props;
  return (
    <CommonContext.Consumer>
      {(value) => {
        const { selectedTheme, onChangeSelectedPage, selectedPage } = value;
        return (
          <SideNavBarContainer>
            <OptionsContainer>
              {sideBarOptionsList.map((eachOption) => (
                <EachSideBarOption
                  key={eachOption.id}
                  selectedTheme={selectedTheme}
                  selectedPage={selectedPage}
                  eachOptionDetails={eachOption}
                  onChangeSelectedPage={onChangeSelectedPage}
                />
              ))}
              {/* <Option
                to={HOME_PAGE_PATH}
                onClick={() => {
                  onChangeSelectedPage(HomePage);
                }}
              >
                <HomeIcon theme={selectedTheme} />
                <OptionText theme={selectedTheme}>
                  {t("navbar.home")}
                </OptionText>
              </Option>
              <Option
                to={TRENDING_VIDEOS_PAGE}
                onClick={() => {
                  onChangeSelectedPage(TrendingVideosPage);
                }}
              >
                <TrendingIcon theme={selectedTheme} />
                <OptionText theme={selectedTheme}>
                  {t("navbar.trending")}
                </OptionText>
              </Option>
              <Option
                to={GAMING_PAGE_PATH}
                onClick={() => {
                  onChangeSelectedPage(GamingPage);
                }}
              >
                <GamingIcon theme={selectedTheme} />
                <OptionText theme={selectedTheme}>
                  {t("navbar.gaming")}
                </OptionText>
              </Option>
              <Option
                to={SAVED_VIDEOS_PAGE}
                onClick={() => {
                  onChangeSelectedPage(SavedVideosPage);
                }}
              >
                <SavedVideosIcon theme={selectedTheme} />
                <OptionText theme={selectedTheme}>
                  {t("navbar.savedVideos")}
                </OptionText>
              </Option> */}
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

export default withTranslation()(SideNavBar);
