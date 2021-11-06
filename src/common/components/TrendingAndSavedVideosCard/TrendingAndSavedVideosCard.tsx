import React from "react";
import { formatDistanceToNow } from "date-fns";
import {
  CardWrapper,
  ChannelLogo,
  ChannelName,
  DetailsContainer,
  DotElement,
  ImageContainer,
  LinkEle,
  PublishedTime,
  VideoDetailsContainer,
  VideoImage,
  VideoTitle,
  Views,
  ViewsAndPublishSection,
} from "../../../components/HomePageVideoCard/stylesComponents";
import { VIDEO_DETAILS } from "../../../constants/RouteConstants";
import { Card, Link, Thumbnail, ThumbnailContainer } from "./styledComplements";

interface HomePageVideoCardPropTypes {
  eachVideoDetails: any;
  theme: string;
}

const TrendingAndSavedVideosCard = (props: HomePageVideoCardPropTypes) => {
  const { eachVideoDetails, theme } = props;
  const { id, title, thumbnailUrl, channel, viewsCount, publishedAt } =
    eachVideoDetails;

  const published = formatDistanceToNow(new Date(publishedAt));

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
