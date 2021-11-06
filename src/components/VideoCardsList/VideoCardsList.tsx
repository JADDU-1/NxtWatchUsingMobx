import React from "react";
import TrendingAndSavedVideosCard from "../../common/components/TrendingAndSavedVideosCard/TrendingAndSavedVideosCard";
import VideoDetailsModel from "../../stores/models/VideoDetailsModel/VideoDetailsModel";
import { VideosListWrapper } from "./styledComponents";

interface VideoCardsListPropTypes {
  videosList: any;
  theme: string;
}

const VideoCardsList = (props: VideoCardsListPropTypes) => {
  const { videosList, theme } = props;

  return (
    <VideosListWrapper>
      {videosList.map((eachVideoDetails: VideoDetailsModel) => (
        <TrendingAndSavedVideosCard
          key={eachVideoDetails.id}
          eachVideoDetails={eachVideoDetails}
          theme={theme}
        />
      ))}
    </VideosListWrapper>
  );
};

export default VideoCardsList;
