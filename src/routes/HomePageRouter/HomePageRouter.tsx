import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import FailureView from "../../common/components/FailureView/FailureView";
import LoaderComponent from "../../common/components/Loader/Loader";
import NavBarsWrapper from "../../common/components/NavBarsWrapper/NavBarsWrapper";
import HomePageVideoCardsList from "../../components/HomePageVideoCardsList/HomePageVideoCardsList";
import NoSearchResults from "../../components/NoSearchResults/NoSearchResults";
import PremiumPlanCard from "../../components/PremiumPlanCard/PremiumPlanCard";
import CommonContext from "../../context";
import HomePageStore from "../../stores/HomePageStore/HomePageStore";
import HomePageEachVideoModel from "../../stores/models/HomePageModel";
import {
  HomePageWrapper,
  SearchBarAndCardsContainer,
  SearchField,
  SearchIcon,
  SearchIconContainer,
  SearInputAndIconContainer,
} from "./styledComponents";

interface InjectedProps extends WithTranslation {
  homePageStore: HomePageStore;
}
@inject("homePageStore")
@observer
class HomePageRouter extends Component<InjectedProps> {
  @observable searchedString: string = "";

  getInjectedProps = (): InjectedProps => this.props as InjectedProps;

  getHomePageStore = () => {
    return this.getInjectedProps().homePageStore;
  };

  componentDidMount() {
    this.doNetworkCalls();
  }

  doNetworkCalls = () => {
    this.getHomePageStore().getHomePageData(this.searchedString);
  };

  getSearchedData = () => {
    this.doNetworkCalls();
  };

  onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.searchedString = event.target.value;
  };

  onClickRetry = () => {
    this.doNetworkCalls();
  };

  renderUiBasedOnApiStatus = (
    theme: string,
    getHomePageAPIStatus: string | number,
    getHomePageVideosList: Array<HomePageEachVideoModel>
  ) => {
    switch (getHomePageAPIStatus) {
      case API_SUCCESS:
        return (
          <>
            {getHomePageVideosList.length === 0 ? (
              <NoSearchResults onClickRetry={this.onClickRetry} theme={theme} />
            ) : (
              <HomePageVideoCardsList
                theme={theme}
                homePageVideosList={getHomePageVideosList}
              />
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

  renderHomeUI = () => {
    const { t } = this.props;
    const {
      onChangeBannerCardStatus,
      shouldShowBannerCard,
      getHomePageAPIStatus,
      getHomePageVideosList,
    } = this.getHomePageStore();
    return (
      <CommonContext.Consumer>
        {(value) => {
          const { selectedTheme } = value;
          return (
            <HomePageWrapper theme={selectedTheme}>
              <PremiumPlanCard
                onChangeBannerCardStatus={onChangeBannerCardStatus}
                shouldShowBannerCard={shouldShowBannerCard}
              />
              <SearchBarAndCardsContainer>
                <SearInputAndIconContainer>
                  <SearchField
                    fieldType={t("homePage.searchInputType")}
                    onChangeFunction={this.onChangeSearchInput}
                    placeHolderText={t("homePage.searchInputPlaceHolderText")}
                  />
                  <SearchIconContainer>
                    <SearchIcon onClick={this.getSearchedData} />
                  </SearchIconContainer>
                </SearInputAndIconContainer>
                {this.renderUiBasedOnApiStatus(
                  selectedTheme,
                  getHomePageAPIStatus,
                  getHomePageVideosList
                )}
              </SearchBarAndCardsContainer>
            </HomePageWrapper>
          );
        }}
      </CommonContext.Consumer>
    );
  };

  render() {
    return <NavBarsWrapper component={this.renderHomeUI()} />;
  }
}

export default withTranslation()(HomePageRouter);
