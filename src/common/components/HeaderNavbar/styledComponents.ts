import tw from "twin.macro";
import styled from "styled-components";
import NxtWatchLogo from "../NXTWatchLogo/NXTWatchLogo";
import { BsBrightnessHigh, BsMoonFill } from "react-icons/bs";
import { LightTheme } from "../../../constants/CommonConstants";

export const HeaderNavBarWrapper = styled.div`
  ${tw` flex flex-row justify-between items-center px-10 `}
`;

export const NxtWatchNavLogo = styled(NxtWatchLogo)`
  ${tw`text-left flex-grow mb-0`}
`;

export const ThemeAndLogOutContainer = styled.div`
  ${tw`flex flex-row items-center`}
  height:70px;
`;

export const ThemeButton = styled.button`
  ${tw`border-none bg-transparent`}
`;

export const DarkThemeIcon = styled(BsMoonFill)`
  ${tw``}
  height:30px;
  width: 30px;
`;

export const LightThemeIcon = styled(BsBrightnessHigh)`
  ${tw``}
  height:30px;
  width: 30px;
  color: white;
`;

export const ProfileIcon = styled.img`
  ${tw`mr-10 m-10`}
  height:30px;
  width: 30px;
`;

export const LogoutButton = styled.button`
  ${tw`bg-transparent py-1 px-2 rounded-sm font-semibold`}
  border-color: ${(props) =>
    props.theme === LightTheme ? "#3b82f6" : "#ffffff"};
  color: ${(props) => (props.theme === LightTheme ? "#3b82f6" : "#ffffff")};
`;
