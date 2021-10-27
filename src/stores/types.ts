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
