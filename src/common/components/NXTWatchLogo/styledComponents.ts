import tw from "twin.macro";
import styled from "styled-components";

export const NxtLogoContainer = styled.div`
  ${tw`text-center mb-8 flex items-center justify-center`}
`;

export const NxtLogo = styled.img`
  ${tw``}
  height:38px;
  @media (max-width: 768px) {
    height: 27px;
  }
`;
