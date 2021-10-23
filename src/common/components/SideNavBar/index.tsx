import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { AiFillHome } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
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
  Option,
  EnjoyRecommendationsText,
  ContactUsTitle,
} from "./stylesComponents";

interface SideNavBarProps extends WithTranslation {}

const SideNavBar = (props: SideNavBarProps) => {
  const { t } = props;

  return (
    <SideNavBarContainer>
      <OptionsContainer>
        <Option to={HOME_PAGE_PATH}>
          <AiFillHome />
          <span>{t("navbar.home")}</span>
        </Option>
        <Option to={TRENDING_VIDEOS_PAGE}>
          <HiFire />
          <span>{t("navbar.trending")}</span>
        </Option>
        <Option to={GAMING_PAGE_PATH}>
          <SiYoutubegaming />
          <span>{t("navbar.gaming")}</span>
        </Option>
        <Option to={SAVED_VIDEOS_PAGE}>
          <RiPlayListAddFill />
          <span>{t("navbar.savedVideos")}</span>
        </Option>
      </OptionsContainer>
      <ContactUsSectionContainer>
        <ContactUsTitle>{t("navbar.contactUs")}</ContactUsTitle>
        <EnjoyRecommendationsText>
          {t("navbar.enjoyRecommendationsText")}
        </EnjoyRecommendationsText>
      </ContactUsSectionContainer>
    </SideNavBarContainer>
  );
};

export default withTranslation()(SideNavBar);
