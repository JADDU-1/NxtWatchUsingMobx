import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { HiFire } from "react-icons/hi";
import NavBarsWrapper from "../../common/components/NavBarsWrapper/NavBarsWrapper";
import CommonBanner from "../../common/components/TrendingAndSavedVideosHeader/TrendingAndSavedVideosHeader";
import VideoCardsList from "../../components/VideoCardsList/VideoCardsList";
import CommonContext from "../../context";
import { HomePageWrapper } from "../HomePageRouter/styledComponents";
import { SavedVideosLogo } from "./styledComponents";

class SavedVideosRoute extends Component<WithTranslation> {
  renderTheSavedVideosUI = () => {
    const { t } = this.props;

    return (
      <CommonContext.Consumer>
        {(value) => {
          const { selectedTheme, savedVideosList } = value;
          return (
            <HomePageWrapper theme={selectedTheme}>
              <CommonBanner
                logoComponent={<SavedVideosLogo />}
                theme={selectedTheme}
                titleText={t("savedVideos")}
              />
              <VideoCardsList
                videosList={savedVideosList}
                theme={selectedTheme}
              />
            </HomePageWrapper>
          );
        }}
      </CommonContext.Consumer>
    );
  };

  render() {
    return <NavBarsWrapper component={this.renderTheSavedVideosUI()} />;
  }
}

export default withTranslation()(SavedVideosRoute);
