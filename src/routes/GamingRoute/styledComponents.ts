import tw from "twin.macro";
import styled from "styled-components";
import { SiYoutubegaming } from "react-icons/si";

export const GamingLogo = styled(SiYoutubegaming)`
  ${tw``}
  height:30px;
  width: 30px;
  color: #ff0000;
`;

export const VideosList = styled.ul`
  ${tw`list-none flex flex-wrap mt-8 h-full`}
`;
