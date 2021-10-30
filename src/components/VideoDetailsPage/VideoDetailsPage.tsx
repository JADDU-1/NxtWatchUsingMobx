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

interface VideoDetailsPropTypes extends WithTranslation {
  videoDetails: VideoDetailsModel;
}

class VideoDetailsPage extends Component<VideoDetailsPropTypes> {
  @observable isLiked: boolean = false;
  @observable isDisliked: boolean = false;
  @observable isSaved: boolean = false;

  onChangeLikeStatus = () => {
    this.isLiked = !this.isLiked;
  };

  onChangeDislikeStatus = () => {
    this.isDisliked = !this.isDisliked;
  };

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
    } = videoDetails;

    const published = formatDistanceToNow(new Date(publishedAt));

    return (
      <CommonContext.Consumer>
        {(value) => {
          const { selectedTheme, onAddVideo } = value;

          const onChangeSaveVideoStatus = () => {
            this.isSaved = !this.isSaved;
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
                    onClick={this.onChangeLikeStatus}
                    //isLiked={this.isLiked}
                  >
                    <BiLike size={20} />
                    {t("videoDetailsPage.like")}
                  </LikeButton>
                  <DislikeButton
                    theme={selectedTheme}
                    onClick={this.onChangeDislikeStatus}
                    //isDisliked={this.isDisliked}
                  >
                    <BiDislike size={20} />
                    {t("videoDetailsPage.dislike")}
                  </DislikeButton>
                  <SavedVideoButton
                    theme={selectedTheme}
                    onClick={onChangeSaveVideoStatus}
                    //isSaved={this.isSaved}
                  >
                    <MdPlaylistAdd size={20} />
                    {t("videoDetailsPage.save")}
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
