import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DarkTheme, LightTheme } from "../../constants/CommonConstants";

export const CardWrapper = styled.li`
  ${tw`mr-6 mb-6`}
  max-width:280px;
  width: 100%;
`;

export const LinkEle = styled(Link)`
  ${tw`no-underline`}
  color: inherit;
`;

export const ImageContainer = styled.div`
  ${tw``}
`;

export const VideoImage = styled.img`
  ${tw`w-full`}
`;

export const VideoDetailsContainer = styled.div`
  ${tw`flex  pr-1 pt-1`}
`;

export const ChannelLogo = styled.img`
  ${tw` mr-2`}
  height:40px;
`;

export const DetailsContainer = styled.div`
  ${tw``}
`;

export const VideoTitle = styled.p`
  ${tw`m-0`}
  color: ${(props) => (props.theme === DarkTheme ? "#f8fafc" : "#1e293b")};
  font-family: "Roboto";
  font-size: 14px;
  line-height: 1.7;
`;

export const ChannelName = styled.p`
  ${tw``}
  color: ${(props) => (props.theme === DarkTheme ? "#64748b" : "#475569")};
  font-family: "Roboto";
  font-size: 12px;
  line-height: 1.7;
`;

export const ViewsAndPublishSection = styled.div`
  ${tw`flex items-center`}
`;

export const Views = styled.span`
  ${tw``}
  color: ${(props) => (props.theme === DarkTheme ? "#64748B" : "#475569")};
  font-family: "Roboto";
  font-size: 12px;
  line-height: 1.7;
`;

export const DotElement = styled.div`
  ${tw``}
  text-align: center;
  align-self: center;
  background-color: ${(props) =>
    props.theme === DarkTheme ? "#64748B" : "#475569"};
  height: 4px;
  width: 4px;
  border-radius: 50%;
  margin-right: 8px;
  margin-left: 8px;
`;

export const PublishedTime = styled.span`
  ${tw``}
  color: ${(props) => (props.theme === DarkTheme ? "#64748B" : "#475569")};
  font-family: "Roboto";
  font-size: 12px;
  line-height: 1.7;
`;
