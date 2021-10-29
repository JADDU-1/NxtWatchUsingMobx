export interface EachVideoObject {
  id: string;
  title: string;
  thumbnail_url: string;
  channel: {
    name: string;
    profile_image_url: string;
  };
  view_count: string;
  published_at: string;
}

export interface HomePageTypes {
  total: number;
  videos: Array<EachVideoObject>;
}

export interface VideoDetailsObjectTypes {
  video_details: {
    id: string;
    title: string;
    video_url: string;
    thumbnail_url: string;
    channel: {
      name: string;
      profile_image_url: string;
      subscriber_count: string;
    };
    view_count: string;
    published_at: string;
    description: string;
  };
}
