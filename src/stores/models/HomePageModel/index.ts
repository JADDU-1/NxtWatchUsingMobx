import { observable } from "mobx";
import { EachVideoObject, HomePageTypes } from "../../types";

class HomePageEachVideoModel {
  id: string;
  title: string;
  thumbnailUrl: string;
  channel: object;
  viewsCount: string;
  publishedAt: string;

  constructor(object: EachVideoObject) {
    this.id = object.id;
    this.title = object.title;
    this.thumbnailUrl = object.thumbnail_url;
    this.channel = {
      name: object.channel.name,
      profileImageUrl: object.channel.profile_image_url,
    };
    this.viewsCount = object.view_count;
    this.publishedAt = object.published_at;
  }
}
export default HomePageEachVideoModel;
