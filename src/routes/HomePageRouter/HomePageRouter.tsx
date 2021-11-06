import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants";
import { action, observable } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import LoaderComponent from "../../common/components/Loader/Loader";
import NavBarsWrapper from "../../common/components/NavBarsWrapper/NavBarsWrapper";
import HomePageVideoCardsList from "../../components/HomePageVideoCardsList/HomePageVideoCardsList";
import PremiumPlanCard from "../../components/PremiumPlanCard/PremiumPlanCard";
import CommonContext from "../../context";
import HomePageStore from "../../stores/HomePageStore/HomePageStore";
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
  @observable searchedString: string;

  constructor(props: any) {
    super(props);
    this.searchedString = "";
  }

  getInjectedProps = (): InjectedProps => this.props as InjectedProps;

  getHomePageStore = () => {
    return this.getInjectedProps().homePageStore;
  };

  componentDidMount() {
    this.doNetworkCalls();
  }

  @action.bound
  doNetworkCalls = () => {
    this.getHomePageStore().getHomePageData(this.searchedString);
  };

  @action.bound
  getSearchedData = () => {
    this.doNetworkCalls();
  };

  @action.bound
  onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.searchedString = event.target.value;
  };

  renderUiBasedOnApiStatus = (theme: string) => {
    const { getHomePageAPIStatus, getHomePageVideosList } =
      this.getHomePageStore();

    switch (getHomePageAPIStatus) {
      case API_SUCCESS:
        return (
          <HomePageVideoCardsList
            theme={theme}
            homePageVideosList={getHomePageVideosList}
          />
        );
      case API_FAILED:
        return <div>failure</div>;
      case API_FETCHING:
        return <LoaderComponent />;
      default:
        return null;
    }
  };

  renderHomeUI = () => {
    const { t } = this.props;
    const { onChangeBannerCardStatus, shouldShowBannerCard } =
      this.getHomePageStore();
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
                {this.renderUiBasedOnApiStatus(selectedTheme)}
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
