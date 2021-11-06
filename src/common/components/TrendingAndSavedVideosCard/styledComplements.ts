import tw from "twin.macro";
import styled from "styled-components";
import { LightTheme } from "../../../constants/CommonConstants";
import {
  CardWrapper,
  ImageContainer,
  LinkEle,
  VideoImage,
} from "../../../components/HomePageVideoCard/stylesComponents";

export const Card = styled.li`
  ${tw`flex mb-12`}
`;

export const Link = styled(LinkEle)`
  ${tw`flex`}
`;

export const ThumbnailContainer = styled(ImageContainer)`
  ${tw`mr-6`}
  height:200px;
`;

export const Thumbnail = styled(VideoImage)`
  ${tw`h-full w-full`}
`;
