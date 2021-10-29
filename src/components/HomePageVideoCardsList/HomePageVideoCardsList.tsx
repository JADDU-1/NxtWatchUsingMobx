import React from "react";
import HomePageEachVideoModel from "../../stores/models/HomePageModel";
import HomePageVideoCard from "../HomePageVideoCard/HomePageVideoCard";
import { VideosList } from "./styledComponents";

interface HomePageVideoCardsListPropsTypes {
  homePageVideosList: Array<HomePageEachVideoModel>;
  theme: string;
}

const HomePageVideoCardsList = (props: HomePageVideoCardsListPropsTypes) => {
  const { homePageVideosList, theme } = props;

  return (
    <VideosList>
      {homePageVideosList?.map((eachVideoDetails: HomePageEachVideoModel) => (
        <HomePageVideoCard
          key={eachVideoDetails.id}
          eachVideoDetails={eachVideoDetails}
          theme={theme}
        />
      ))}
    </VideosList>
  );
};

export default HomePageVideoCardsList;
