import React, { Component } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import CommonContext from "./context";
import "./App.css";
import CommonRoute from "./common/routes/CommonRoute";
import stores from "./stores";
import { observer, Provider } from "mobx-react";
import { observable, action } from "mobx";
import { LightTheme, HomePage, DarkTheme } from "./constants/CommonConstants";
import VideoDetailsModel from "./stores/models/VideoDetailsModel/VideoDetailsModel";

@observer
class App extends Component {
  @observable selectedTheme: string = LightTheme;
  @observable savedVideosList: any = [];

  @action.bound
  onChangeTheme = () => {
    this.selectedTheme =
      this.selectedTheme === LightTheme ? DarkTheme : LightTheme;
    console.log(this.selectedTheme);
  };

  @action.bound
  onAddVideo = (videoDetails: VideoDetailsModel) => {
    const { savedVideosList } = this;
    this.savedVideosList = [...savedVideosList, videoDetails];
  };

  onRemoveVideo = (videoDetails: VideoDetailsModel) => {
    const { savedVideosList } = this;
    const videoObject = savedVideosList.filter(
      (eachVideoItem: VideoDetailsModel) => eachVideoItem.id !== videoDetails.id
    );

    this.setState({ savedVideosList: videoObject });
  };

  render() {
    const { selectedTheme, savedVideosList } = this;

    return (
      <Provider {...stores}>
        <CommonContext.Provider
          value={{
            selectedTheme,
            onChangeTheme: this.onChangeTheme,
            savedVideosList,
            onAddVideo: this.onAddVideo,
            onRemoveVideo: this.onRemoveVideo,
          }}
        >
          <I18nextProvider i18n={i18n}>
            <CommonRoute />
          </I18nextProvider>
        </CommonContext.Provider>
      </Provider>
    );
  }
}

export default App;
