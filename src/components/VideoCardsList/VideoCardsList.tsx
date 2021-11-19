import React from "react";
import TrendingAndSavedVideosCard from "../../common/components/TrendingAndSavedVideosCard/TrendingAndSavedVideosCard";
import HomePageEachVideoModel from "../../stores/models/HomePageModel";
import { VideosListWrapper } from "./styledComponents";

interface VideoCardsListPropTypes {
  videosList: Array<HomePageEachVideoModel>;
  theme: string;
}

const VideoCardsList = (props: VideoCardsListPropTypes) => {
  const { videosList, theme } = props;

  return (
    <VideosListWrapper>
      {videosList.map((eachVideoDetails: HomePageEachVideoModel) => (
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
