import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import NavBarsWrapper from "../../common/components/NavBarsWrapper/NavBarsWrapper";
import VideoItemDetailsStore from "../../stores/VideoItemDetailsStore/VideoItemDetailsStore";
import { RouteComponentProps } from "react-router-dom";
import VideoDetailsPage from "../../components/VideoDetailsPage/VideoDetailsPage";

interface RouteParams {
  id: string;
}

interface PropTypes extends RouteComponentProps<RouteParams> {}

interface PropTypes extends WithTranslation {}

interface InjectedProps extends PropTypes {}

interface PropTypes {
  videoItemDetailsStore: VideoItemDetailsStore;
}
@inject("videoItemDetailsStore")
@observer
class VideoItemDetailsRoute extends Component<PropTypes> {
  getInjectedProps = (): InjectedProps => this.props as InjectedProps;

  getVideoDetailsStore = () => {
    return this.getInjectedProps().videoItemDetailsStore;
  };

  componentDidMount() {
    this.doNetworkCalls();
  }
  doNetworkCalls = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id, "id");
    this.getVideoDetailsStore().getVideoDetailsPageData(id);
  };

  renderUiBasedOnApiStatus = () => {
    const { getVideoDetailsAPIStatus, getVideoDetails } =
      this.getVideoDetailsStore();

    console.log(getVideoDetails);
    switch (getVideoDetailsAPIStatus) {
      case API_SUCCESS:
        return <VideoDetailsPage videoDetails={getVideoDetails} />;
      case API_FAILED:
        return <div>failure</div>;
      case API_FETCHING:
        return <div>loading the view</div>;
      default:
        return null;
    }
  };

  render() {
    return <NavBarsWrapper component={this.renderUiBasedOnApiStatus()} />;
  }
}

export default withTranslation()(VideoItemDetailsRoute);
