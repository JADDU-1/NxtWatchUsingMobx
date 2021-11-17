import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import ReactPlayer from "react-player";
import { VIDEO_DETAILS } from "../../constants/RouteConstants";
import VideoDetailsModel from "../../stores/models/VideoDetailsModel/VideoDetailsModel";
import CommonContext from "../../context";
import { MdPlaylistAdd } from "react-icons/md";
import { BiLike, BiDislike } from "react-icons/bi";
import {
  Views,
  DotElement,
  PublishedTime,
  ChannelLogo,
  ChannelName,
} from "../HomePageVideoCard/stylesComponents";
import { withTranslation, WithTranslation } from "react-i18next";
import { observable } from "mobx";
import {
  VideoDetailsContainer,
  VideoContainer,
  VideoTitle,
  ViewsAndLikesDislikesContainer,
  ViewAndPublishedTimeContainer,
  ChannelNameAndDescriptionContainer,
  Description,
  DislikeButton,
  HorizontalLine,
  LikeButton,
  LikesAndDislikesContainer,
  Subscribers,
  SavedVideoButton,
  ChannelAndDescriptionContainer,
  ChannelTitle,
} from "./styledComponents";
import { observer } from "mobx-react";

interface VideoDetailsPropTypes extends WithTranslation {
  videoDetails: VideoDetailsModel;
}

@observer
class VideoDetailsPage extends Component<VideoDetailsPropTypes> {
  @observable isLiked: boolean = false;
  @observable isDisliked: boolean = false;
  @observable isSaved: boolean = false;

  render() {
    const { t } = this.props;
    const { videoDetails } = this.props;
    const {
      id,
      title,
      thumbnailUrl,
      channel,
      videoUrl,
      viewsCount,
      publishedAt,
      description,
      isLiked,
      isDisliked,
      onChangeLikedStatus,
      onChangeDislikedStatus,
    } = videoDetails;

    const published = formatDistanceToNow(new Date(publishedAt));

    return (
      <CommonContext.Consumer>
        {(value) => {
          const { selectedTheme, onAddVideo, savedVideosList } = value;
          const isSavedVideo = () => {
            return savedVideosList.some(
              (eachVideo: any) => eachVideo.id === id
            );
          };
          const onChangeSaveVideoStatus = () => {
            onAddVideo(videoDetails);
          };
          return (
            <VideoDetailsContainer theme={selectedTheme}>
              <VideoContainer>
                <ReactPlayer
                  height="100%"
                  width="100%"
                  url={videoUrl}
                  controls
                />
              </VideoContainer>
              <VideoTitle theme={selectedTheme}>{title}</VideoTitle>
              <ViewsAndLikesDislikesContainer>
                <ViewAndPublishedTimeContainer>
                  <Views theme={selectedTheme}>
                    {viewsCount} {t("videoDetailsPage.views")}
                  </Views>
                  <DotElement theme={selectedTheme}></DotElement>
                  <PublishedTime theme={selectedTheme}>
                    {published} {t("videoDetailsPage.ago")}
                  </PublishedTime>
                </ViewAndPublishedTimeContainer>
                <LikesAndDislikesContainer>
                  <LikeButton
                    theme={selectedTheme}
                    onClick={onChangeLikedStatus}
                    isLiked={isLiked}
                  >
                    <BiLike size={20} />
                    {t("videoDetailsPage.like")}
                  </LikeButton>
                  <DislikeButton
                    theme={selectedTheme}
                    onClick={onChangeDislikedStatus}
                    isDisliked={isDisliked}
                  >
                    <BiDislike size={20} />
                    {t("videoDetailsPage.dislike")}
                  </DislikeButton>
                  <SavedVideoButton
                    theme={selectedTheme}
                    onClick={onChangeSaveVideoStatus}
                    isSaved={isSavedVideo()}
                  >
                    <MdPlaylistAdd size={20} />
                    {isSavedVideo()
                      ? t("videoDetailsPage.unSave")
                      : t("videoDetailsPage.save")}
                  </SavedVideoButton>
                </LikesAndDislikesContainer>
              </ViewsAndLikesDislikesContainer>
              <HorizontalLine />
              <ChannelAndDescriptionContainer>
                <ChannelLogo src={channel.profileImageUrl} />
                <ChannelNameAndDescriptionContainer>
                  <ChannelTitle theme={selectedTheme}>
                    {channel.name}
                  </ChannelTitle>
                  <Subscribers>
                    {channel.subscribersCount}{" "}
                    {t("videoDetailsPage.subscribers")}
                  </Subscribers>
                  <Description theme={selectedTheme}>{description}</Description>
                </ChannelNameAndDescriptionContainer>
              </ChannelAndDescriptionContainer>
            </VideoDetailsContainer>
          );
        }}
      </CommonContext.Consumer>
    );
  }
}

export default withTranslation()(VideoDetailsPage);
