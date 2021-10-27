import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LightTheme } from "../../../constants/CommonConstants";
import { AiFillHome } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";

export const SideNavBarContainer = styled.div`
  ${tw`flex flex-col  h-full  py-4`}
  width:12%;
  border: 1px solid red;
`;

export const OptionsContainer = styled.div`
  ${tw`flex flex-col  flex-grow`}
`;

export const ContactUsSectionContainer = styled.div`
  ${tw` pl-4`}
`;

export const SocialMediaIcon = styled.img`
  ${tw`mr-4`}
  height:30px;
`;

export const ContactUsTitle = styled.h3`
  ${tw`text-base font-bold`}
  color: ${(props) => (props.theme === LightTheme ? "#000000" : "#ffffff")};
`;

export const EnjoyRecommendationsText = styled.p`
  ${tw`text-sm font-bold`}
  color: ${(props) => (props.theme === LightTheme ? "#000000" : "#ffffff")};
`;
