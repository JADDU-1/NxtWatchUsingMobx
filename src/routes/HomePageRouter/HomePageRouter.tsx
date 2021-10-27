import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants";
import { action, observable } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import NavBarsWrapper from "../../common/components/NavBarsWrapper/NavBarsWrapper";
import PremiumPlanCard from "../../components/PremiumPlanCard/PremiumPlanCard";
import HomePageStore from "../../stores/HomePageStore/HomePageStore";
import { HomePageWrapper } from "./styledComponents";

// interface InjectedProps extends PropsType {
//   authenticStore: AuthenticStore;
// }
interface InjectedProps {
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

  @action.bound
  onChangeSearchInput = () => {};

  renderUiBasedOnApiStatus = () => {
    const { getHomePageAPIStatus } = this.getHomePageStore();
    switch (getHomePageAPIStatus) {
      case API_SUCCESS:
        return <div>Home</div>;
      case API_FAILED:
        return <div>failure</div>;
      case API_FETCHING:
        return <div>loading the view</div>;
      default:
        return null;
    }
  };

  renderHomeUI = () => {
    const { onChangeBannerCardStatus, shouldShowBannerCard } =
      this.getHomePageStore();
    return (
      <HomePageWrapper>
        <PremiumPlanCard
          onChangeBannerCardStatus={onChangeBannerCardStatus}
          shouldShowBannerCard={shouldShowBannerCard}
        />
        {this.renderUiBasedOnApiStatus()}
      </HomePageWrapper>
    );
  };

  render() {
    const { getHomePageVideosList, getHomePageAPIStatus } =
      this.getHomePageStore();
    console.log(getHomePageAPIStatus);

    return <NavBarsWrapper component={this.renderHomeUI()} />;
  }
}

export default HomePageRouter;
