import React from "react";
import HomePageEachVideoModel from "../../stores/models/HomePageModel";
import { formatDistanceToNow } from "date-fns";
import {
  CardWrapper,
  ImageContainer,
  VideoDetailsContainer,
  ViewsAndPublishSection,
  ChannelLogo,
  DetailsContainer,
  VideoTitle,
  ChannelName,
  Views,
  PublishedTime,
  VideoImage,
  DotElement,
  LinkEle,
} from "./stylesComponents";
import { VIDEO_DETAILS } from "../../constants/RouteConstants";

interface HomePageVideoCardPropTypes {
  eachVideoDetails: HomePageEachVideoModel;
  theme: string;
}

const HomePageVideoCard = (props: HomePageVideoCardPropTypes) => {
  const { eachVideoDetails, theme } = props;
  const { id, title, thumbnailUrl, channel, viewsCount, publishedAt } =
    eachVideoDetails;

  const published = formatDistanceToNow(new Date(publishedAt));

  return (
    <CardWrapper>
      <LinkEle to={`${VIDEO_DETAILS}${id}`}>
        <ImageContainer>
          <VideoImage src={thumbnailUrl} />
        </ImageContainer>
        <VideoDetailsContainer>
          <ChannelLogo src={channel.profileImageUrl} />
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
      </LinkEle>
    </CardWrapper>
  );
};

export default HomePageVideoCard;
