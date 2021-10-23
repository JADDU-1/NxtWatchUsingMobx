import tw from "twin.macro";
import styled from "styled-components";
import NxtWatchLogo from "../NXTWatchLogo/NXTWatchLogo";

export const HeaderNavBarWrapper = styled.div`
  ${tw`flex justify-between items-center`}
`;

export const NxtWatchNavLogo = styled(NxtWatchLogo)`
  ${tw`text-left `}
  border:1px solid red;
`;

export const ThemeAndLogOutContainer = styled.div`
  ${tw``}
`;

export const LogoutButton = styled.button`
  ${tw``}
`;
