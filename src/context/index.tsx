import React from "react";
import { HomePage, LightTheme } from "../constants/CommonConstants";
import VideoDetailsModel from "../stores/models/VideoDetailsModel/VideoDetailsModel";

const CommonContext = React.createContext({
  selectedTheme: LightTheme,
  onChangeTheme: () => {},
  selectedPage: HomePage,
  onChangeSelectedPage: (pageName: string) => {},
  savedVideosList: [],
  onAddVideo: (videoDetails: VideoDetailsModel) => {},
  onRemoveVideo: (videoDetails: VideoDetailsModel) => {},
});

export default CommonContext;
