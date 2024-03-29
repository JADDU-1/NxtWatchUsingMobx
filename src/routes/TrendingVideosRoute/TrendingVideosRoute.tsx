import React, { Component } from "react";
import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants";
import { inject, observer } from "mobx-react";
import { withTranslation, WithTranslation } from "react-i18next";
import NavBarsWrapper from "../../common/components/NavBarsWrapper/NavBarsWrapper";
import CommonBanner from "../../common/components/TrendingAndSavedVideosHeader/TrendingAndSavedVideosHeader";
import VideoCardsList from "../../components/VideoCardsList/VideoCardsList";
import CommonContext from "../../context";
import TrendingVideosStore from "../../stores/TrendingVideosStore/TrendingVideosStore";
import { HomePageWrapper } from "../HomePageRouter/styledComponents";
import { TrendingVideosLogo } from "./styledComponents";
import LoaderComponent from "../../common/components/Loader/Loader";
import { action } from "mobx";
import FailureView from "../../common/components/FailureView/FailureView";
import HomePageEachVideoModel from "../../stores/models/HomePageModel";

interface InjectedProps extends WithTranslation {
  trendingVideosStore: TrendingVideosStore;
}
@inject("trendingVideosStore")
@observer
class TrendingVideosRoute extends Component<InjectedProps> {
  getInjectedProps = (): InjectedProps => this.props as InjectedProps;

  getTrendingPageStore = () => {
    return this.getInjectedProps().trendingVideosStore;
  };

  componentDidMount() {
    this.doNetworkCalls();
  }

  doNetworkCalls = () => {
    this.getTrendingPageStore().getTrendingPageData();
  };

  onClickRetry = () => {
    this.doNetworkCalls();
  };

  renderUiBasedOnApiStatus = (
    theme: string,
    getTrendingPageAPIStatus: number,
    getTrendingPageVideosList: Array<HomePageEachVideoModel>
  ) => {
    switch (getTrendingPageAPIStatus) {
      case API_SUCCESS:
        return (
          <VideoCardsList
            videosList={getTrendingPageVideosList}
            theme={theme}
          />
        );
      case API_FAILED:
        return <FailureView onClickRetry={this.onClickRetry} theme={theme} />;
      case API_FETCHING:
        return <LoaderComponent />;
      default:
        return null;
    }
  };

  renderUI = () => {
    const { t } = this.props;
    const { getTrendingPageAPIStatus, getTrendingPageVideosList } =
      this.getTrendingPageStore();
    return (
      <CommonContext.Consumer>
        {(value) => {
          const { selectedTheme } = value;
          return (
            <HomePageWrapper theme={selectedTheme}>
              <CommonBanner
                logoComponent={<TrendingVideosLogo />}
                theme={selectedTheme}
                titleText={t("trendingText")}
              />
              {this.renderUiBasedOnApiStatus(
                selectedTheme,
                getTrendingPageAPIStatus,
                getTrendingPageVideosList
              )}
            </HomePageWrapper>
          );
        }}
      </CommonContext.Consumer>
    );
  };

  render() {
    return <NavBarsWrapper component={this.renderUI()} />;
  }
}

export default withTranslation()(TrendingVideosRoute);
