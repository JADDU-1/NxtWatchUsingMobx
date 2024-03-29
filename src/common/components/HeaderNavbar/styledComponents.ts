import tw from "twin.macro";
import styled from "styled-components";
import NxtWatchLogo from "../NXTWatchLogo/NXTWatchLogo";
import { BsBrightnessHigh, BsMoonFill } from "react-icons/bs";
import { LightTheme } from "../../../constants/CommonConstants";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderNavBarWrapper = styled.div`
  ${tw` flex flex-row justify-between px-10`}
  @media (max-width: 768px) {
    ${tw`px-4 `}
  }
`;

export const NxtWatchNavLogo = styled(NxtWatchLogo)`
  ${tw`text-left mb-0`}
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
  @media (max-width: 768px) {
    height: 25px;
    width: 25px;
  }
`;

export const LightThemeIcon = styled(BsBrightnessHigh)`
  ${tw``}
  height:30px;
  width: 30px;
  color: white;
  @media (max-width: 768px) {
    height: 25px;
    width: 25px;
  }
`;

export const ProfileIcon = styled.img`
  ${tw`mr-10 m-10`}
  height:30px;
  width: 30px;
`;

export const HamburgerMenuButton = styled.button`
  ${tw`border-none mx-2 bg-transparent`}
`;

export const HamburgerMenuIcon = styled(GiHamburgerMenu)`
  ${tw``}
  height:25px;
  width: 25px;
  color: ${(props) => (props.theme === LightTheme ? "#212121" : "#ffffff")};
`;

export const LogoutButton = styled.button`
  ${tw`bg-transparent py-1 px-2 rounded-sm font-semibold outline-none cursor-pointer`}
  font-family: "Roboto";
  border-color: ${(props) =>
    props.theme === LightTheme ? "#3b82f6" : "#ffffff"};
  color: ${(props) => (props.theme === LightTheme ? "#3b82f6" : "#ffffff")};
  @media (max-width: 768px) {
    ${tw`border-none`}
    color: ${(props) => (props.theme === LightTheme ? "#212121" : "#ffffff")};
  }
`;

export const LogoutIcon = styled(FiLogOut)`
  ${tw``}
  height:25px;
  width: 25px;
`;

export const PopUpContainer = styled.div`
  ${tw`absolute m-auto rounded inset-0 p-4 text-center flex flex-col justify-center shadow-lg`}
  background-color: ${(props) =>
    props.theme === LightTheme ? "#ffffff" : "#212121"};
  max-width: 300px;
  height: 150px;
`;

export const PopUpDescription = styled.p`
  ${tw`mb-10`}
  font-family: "Roboto";
  font-size: 14px;
  color: ${(props) => props.theme !== LightTheme && "#ffffff"};
`;

export const ButtonsContainer = styled.div`
  ${tw`text-center`}
`;

export const CancelButton = styled(LogoutButton)`
  ${tw`mr-6 py-1 rounded px-4`}
`;

export const ConfirmButton = styled(LogoutButton)`
  ${tw`border-none rounded py-2 px-4`}

  background-color: #3b82f6;
`;
