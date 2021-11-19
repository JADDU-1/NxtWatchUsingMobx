import React, { Component } from "react";
import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants";
import { inject, observer } from "mobx-react";
import { withTranslation, WithTranslation } from "react-i18next";
import NavBarsWrapper from "../../common/components/NavBarsWrapper/NavBarsWrapper";
import CommonBanner from "../../common/components/TrendingAndSavedVideosHeader/TrendingAndSavedVideosHeader";
import CommonContext from "../../context";
import GameVideosStore from "../../stores/GameVideosStore/GameVideosStore";
import { HomePageWrapper } from "../HomePageRouter/styledComponents";
import { GamingLogo, VideosList } from "./styledComponents";
import GamePageCard from "../../components/GamePageCard/GamePageCard";
import LoaderComponent from "../../common/components/Loader/Loader";
import FailureView from "../../common/components/FailureView/FailureView";
import HomePageEachVideoModel from "../../stores/models/HomePageModel";

interface InjectedProps extends WithTranslation {
  gameVideosStore: GameVideosStore;
}
@inject("gameVideosStore")
@observer
class GamingRoute extends Component<InjectedProps> {
  getInjectedProps = (): InjectedProps => this.props as InjectedProps;

  getGamePageStore = () => {
    return this.getInjectedProps().gameVideosStore;
  };

  componentDidMount() {
    this.doNetworkCalls();
  }

  doNetworkCalls = () => {
    this.getGamePageStore().getGamePageData();
  };

  onClickRetry = () => {
    this.doNetworkCalls();
  };

  renderUiBasedOnApiStatus = (
    theme: string,
    getGamePageAPIStatus: string | number,
    getGamePageVideosList: Array<HomePageEachVideoModel>
  ) => {
    switch (getGamePageAPIStatus) {
      case API_SUCCESS:
        return (
          <>
            {getGamePageVideosList.map(
              (eachVideoDetails: HomePageEachVideoModel) => (
                <GamePageCard
                  key={eachVideoDetails.id}
                  eachVideoDetails={eachVideoDetails}
                  theme={theme}
                />
              )
            )}
          </>
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
    const { getGamePageAPIStatus, getGamePageVideosList } =
      this.getGamePageStore();
    return (
      <CommonContext.Consumer>
        {(value) => {
          const { selectedTheme } = value;
          return (
            <HomePageWrapper theme={selectedTheme}>
              <CommonBanner
                logoComponent={<GamingLogo />}
                theme={selectedTheme}
                titleText={t("gaming.gamingTitle")}
              />
              <VideosList>
                {this.renderUiBasedOnApiStatus(
                  selectedTheme,
                  getGamePageAPIStatus,
                  getGamePageVideosList
                )}
              </VideosList>
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

export default withTranslation()(GamingRoute);
