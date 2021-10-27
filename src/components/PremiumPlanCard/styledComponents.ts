import tw from "twin.macro";
import styled from "styled-components";
import NxtWatchLogo from "../../common/components/NXTWatchLogo/NXTWatchLogo";
import { IoMdClose } from "react-icons/io";

export const PremiumPlanCardContainer = styled.div`
  ${tw`px-8 py-4 bg-cover`}
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  border: 1px solid red;
  height: 20vh;
`;

export const NXTLogoAndCloseButtonContainer = styled.div`
  ${tw`flex justify-between`}
`;

export const NXTLogo = styled(NxtWatchLogo)`
  ${tw`mb-0`}
`;

export const CloseIcon = styled(IoMdClose)`
  ${tw``}
`;

export const BuyNxtWatchText = styled.p`
  ${tw``}
  width: 20%;
`;

export const GetButton = styled.button`
  ${tw`px-4 py-2 mt-4 bg-transparent font-bold`}
`;
