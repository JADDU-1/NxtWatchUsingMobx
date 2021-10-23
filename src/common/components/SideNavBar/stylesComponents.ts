import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideNavBarContainer = styled.div`
  ${tw`flex flex-col  h-full`}
  width:10%;
  border: 1px solid red;
`;

export const OptionsContainer = styled.div`
  ${tw`flex flex-col  flex-grow`}
`;

export const Option = styled(Link)`
  ${tw``}
`;

export const ContactUsSectionContainer = styled.div`
  ${tw``}
`;

export const ContactUsTitle = styled.h3`
  ${tw``}
`;

export const EnjoyRecommendationsText = styled.p`
  ${tw``}
`;
