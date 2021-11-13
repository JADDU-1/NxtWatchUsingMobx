import tw from "twin.macro";
import styled from "styled-components";
import { DarkTheme, LightTheme } from "../../constants/CommonConstants";
import { ChannelName, Views } from "../HomePageVideoCard/stylesComponents";

export const VideoDetailsContainer = styled.div`
  ${tw`w-full  p-6 overflow-y-scroll`}
  background-color: ${(props) =>
    props.theme === LightTheme ? "#f9f9f9" : "#0f0f0f"};
  @media (max-width: 768px) {
    ${tw`p-0 pt-4`}
  }
`;

export const VideoContainer = styled.div`
  ${tw`w-full `}
  height: 70vh;
  @media (max-width: 768px) {
    ${tw`w-full`}
    height:250px;
  }
`;

export const VideoTitle = styled.p`
  ${tw``}
  color: ${(props) => (props.theme === DarkTheme ? "#f8fafc" : "#1e293b")};
  font-family: "Roboto";
  font-size: 16px;
  line-height: 1.7;
  @media (max-width: 768px) {
    ${tw`px-4 mb-0`}
  }
`;

export const ViewsAndLikesDislikesContainer = styled.div`
  ${tw`flex justify-between items-center`}
  @media (max-width: 768px) {
    ${tw`p-4 flex-col items-start`}
  }
`;

export const ViewAndPublishedTimeContainer = styled.div`
  ${tw`flex`}
`;
export const LikesAndDislikesContainer = styled.div`
  ${tw`flex p-4`}
  @media (max-width: 768px) {
    ${tw`p-0 pt-4`}
  }
`;

export const LikeButton = styled.button`
  ${tw`flex items-center justify-between border-none bg-transparent  cursor-pointer`}
  width: 61px;
  color: ${(props) => (props.theme === DarkTheme ? "#64748B" : "#475569")};
  font-family: "Roboto";
  font-size: 12px;
  @media (max-width: 768px) {
    ${tw`p-0 mr-4`}
    width: 45px;
  }
`;

export const DislikeButton = styled.button`
  ${tw`flex items-center justify-between border-none bg-transparent  cursor-pointer`}
  width: 75px;
  color: ${(props) => (props.theme === DarkTheme ? "#64748B" : "#475569")};
  font-family: "Roboto";
  font-size: 12px;
  @media (max-width: 768px) {
    ${tw`p-0 mr-4`}
    width: 45px;
  }
`;

export const SavedVideoButton = styled.button`
  ${tw`flex items-center justify-between border-none bg-transparent  cursor-pointer`}
  width: 64px;
  color: ${(props) => (props.theme === DarkTheme ? "#64748B" : "#475569")};
  font-family: "Roboto";
  font-size: 12px;
  @media (max-width: 768px) {
    ${tw`p-0 mr-4`}
    width: 45px;
  }
`;

export const HorizontalLine = styled.hr`
  ${tw`my-6`}
  border: ${(props) =>
    props.theme === DarkTheme ? "1px solid #475569" : "1px solid #e5e5e5"};
  @media (max-width: 768px) {
    ${tw`mx-4`}
  }
`;

export const Subscribers = styled(Views)`
  ${tw`mb-10`}
`;

export const Description = styled.p`
  ${tw`mt-6`}
  color: ${(props) => (props.theme === DarkTheme ? "#f8fafc" : "#1e293b")};
  font-family: "Roboto";
  font-size: 12px;
  @media (max-width: 768px) {
    ${tw`w-full`}
  }
`;

export const ChannelNameAndDescriptionContainer = styled.div`
  ${tw`ml-2`}
`;

export const ChannelAndDescriptionContainer = styled.div`
  ${tw`flex`}
  @media (max-width: 768px) {
    ${tw`p-4`}
  }
`;

export const ChannelTitle = styled(ChannelName)`
  ${tw`my-1`}
  color: ${(props) => (props.theme === DarkTheme ? "#f8fafc" : "#1e293b")};
`;
