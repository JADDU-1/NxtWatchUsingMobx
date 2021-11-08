import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { HiFire } from "react-icons/hi";
import NavBarsWrapper from "../../common/components/NavBarsWrapper/NavBarsWrapper";
import CommonBanner from "../../common/components/TrendingAndSavedVideosHeader/TrendingAndSavedVideosHeader";
import VideoCardsList from "../../components/VideoCardsList/VideoCardsList";
import CommonContext from "../../context";
import { HomePageWrapper } from "../HomePageRouter/styledComponents";
import { SavedVideosLogo } from "./styledComponents";
import NoSavedVideos from "../../components/NoSavedVideos/NosavedVideos";

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
              {savedVideosList.length === 0 ? (
                <NoSavedVideos theme={selectedTheme} />
              ) : (
                <VideoCardsList
                  videosList={savedVideosList}
                  theme={selectedTheme}
                />
              )}
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
