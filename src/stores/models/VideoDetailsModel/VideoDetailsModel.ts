import { VideoDetailsObjectTypes } from "../../types";
import HomePageEachVideoModel from "../HomePageModel";

class VideoDetailsModel {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  channel: { name: string; profileImageUrl: string; subscribersCount: string };
  viewsCount: string;
  publishedAt: string;
  description: string;

  constructor(response: VideoDetailsObjectTypes) {
    this.id = response.video_details.id;
    this.title = response.video_details.title;
    this.thumbnailUrl = response.video_details.thumbnail_url;
    this.videoUrl = response.video_details.video_url;
    this.channel = {
      name: response.video_details.channel.name,
      profileImageUrl: response.video_details.channel.profile_image_url,
      subscribersCount: response.video_details.channel.subscriber_count,
    };
    this.viewsCount = response.video_details.view_count;
    this.publishedAt = response.video_details.published_at;
    this.description = response.video_details.description;
  }
}
export default VideoDetailsModel;
