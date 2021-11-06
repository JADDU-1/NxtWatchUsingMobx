import React, { Component } from "react";
import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants";
import { inject, observer } from "mobx-react";
import { withTranslation, WithTranslation } from "react-i18next";
import NavBarsWrapper from "../../common/components/NavBarsWrapper/NavBarsWrapper";
import CommonBanner from "../../common/components/TrendingAndSavedVideosHeader/TrendingAndSavedVideosHeader";
import VideoCardsList from "../../components/VideoCardsList/VideoCardsList";
import CommonContext from "../../context";
import GameVideosStore from "../../stores/GameVideosStore/GameVideosStore";
import { HomePageWrapper } from "../HomePageRouter/styledComponents";
import { GamingLogo, VideosList } from "./styledComponents";
import GamePageCard from "../../components/GamePageCard/GamePageCard";
import LoaderComponent from "../../common/components/Loader/Loader";

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

  renderUiBasedOnApiStatus = (theme: string) => {
    const { getGamePageAPIStatus, getGamePageVideosList } =
      this.getGamePageStore();
    console.log(getGamePageVideosList, "game");
    switch (getGamePageAPIStatus) {
      case API_SUCCESS:
        return (
          <>
            {getGamePageVideosList.map((eachVideoDetails: any) => (
              <GamePageCard
                key={eachVideoDetails.id}
                eachVideoDetails={eachVideoDetails}
                theme={theme}
              />
            ))}
          </>
        );
      case API_FAILED:
        return <div>failure</div>;
      case API_FETCHING:
        return <LoaderComponent />;
      default:
        return null;
    }
  };

  renderUI = () => {
    const { t } = this.props;
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
                {this.renderUiBasedOnApiStatus(selectedTheme)}
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
