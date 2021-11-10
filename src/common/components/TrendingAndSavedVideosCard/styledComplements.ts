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
  @media (max-width: 767px) {
    ${tw`flex-wrap w-full`}
  }
`;

export const ThumbnailContainer = styled(ImageContainer)`
  ${tw`mr-0 mb-2`}
  @media(min-width: 768px) {
    ${tw`mr-6 `}
    height:200px;
  }
`;

export const Thumbnail = styled(VideoImage)`
  ${tw`h-full w-full`}
  @media(min-width: 768px) {
    ${tw``}
    width: 310px;
  }
`;
