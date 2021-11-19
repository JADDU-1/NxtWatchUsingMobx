import React from "react";
import { formatDistanceToNow } from "date-fns";
import {
  ChannelName,
  DetailsContainer,
  DotElement,
  PublishedTime,
  VideoDetailsContainer,
  VideoTitle,
  Views,
  ViewsAndPublishSection,
} from "../../../components/HomePageVideoCard/stylesComponents";
import { VIDEO_DETAILS } from "../../../constants/RouteConstants";
import { Card, Link, Thumbnail, ThumbnailContainer } from "./styledComplements";
import HomePageEachVideoModel from "../../../stores/models/HomePageModel";

interface HomePageVideoCardPropTypes {
  eachVideoDetails: HomePageEachVideoModel;
  theme: string;
}

const TrendingAndSavedVideosCard = (props: HomePageVideoCardPropTypes) => {
  const { eachVideoDetails, theme } = props;
  const { id, title, thumbnailUrl, channel, viewsCount, publishedAt } =
    eachVideoDetails;

  const published = publishedAt && formatDistanceToNow(new Date(publishedAt));

  return (
    <Card>
      <Link to={`${VIDEO_DETAILS}${id}`}>
        <ThumbnailContainer>
          <Thumbnail src={thumbnailUrl} />
        </ThumbnailContainer>
        <VideoDetailsContainer>
          <DetailsContainer>
            <VideoTitle theme={theme}>{title}</VideoTitle>
            <ChannelName theme={theme}>{channel.name}</ChannelName>
            <ViewsAndPublishSection>
              <Views theme={theme}>{viewsCount} Views</Views>
              <DotElement theme={theme}></DotElement>
              <PublishedTime theme={theme}>{published}</PublishedTime>
            </ViewsAndPublishSection>
          </DetailsContainer>
        </VideoDetailsContainer>
      </Link>
    </Card>
  );
};

export default TrendingAndSavedVideosCard;
