import React from "react";
import { LightTheme } from "../constants/CommonConstants";
import VideoDetailsModel from "../stores/models/VideoDetailsModel/VideoDetailsModel";

const CommonContext = React.createContext({
  selectedTheme: LightTheme,
  onChangeTheme: () => {},
  savedVideosList: [],
  onAddVideo: (videoDetails: VideoDetailsModel) => {},
  onRemoveVideo: (videoDetails: VideoDetailsModel) => {},
});

export default CommonContext;
