import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LightTheme } from "../../../constants/CommonConstants";
import { AiFillHome } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";

export const Option = styled(Link)`
  ${tw`flex items-center no-underline py-2  pl-4 `}
  background-color: ${(props) => props.theme === true && "#ffffff20"};
  background-color: ${(props) =>
    props.color === LightTheme && props.theme === true && "#f1f5f9"};
  font-weight: ${(props) => props.theme === true && "bold"};
`;

export const HomeIcon = styled(AiFillHome)`
  ${tw`mr-6`}
  color: ${(props) => (props.theme === LightTheme ? " #383838" : "#909090")};
`;

export const TrendingIcon = styled(HiFire)`
  ${tw`mr-6`}
  color: ${(props) => (props.theme === LightTheme ? " #383838" : "#909090")};
`;

export const GamingIcon = styled(SiYoutubegaming)`
  ${tw`mr-6`}
  color: ${(props) => (props.theme === LightTheme ? " #383838" : "#909090")};
`;

export const SavedVideosIcon = styled(RiPlayListAddFill)`
  ${tw`mr-6`}
  color: ${(props) => (props.theme === LightTheme ? " #383838" : "#909090")};
`;

export const OptionText = styled.span`
  ${tw`text-base`}
  font-family:Roboto;
  color: ${(props) => (props.theme === LightTheme ? "#000000" : "#ffffff")};
`;
