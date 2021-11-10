import tw from "twin.macro";
import styled from "styled-components";

export const VideosListWrapper = styled.ul`
  ${tw`py-8 px-10 list-none`}
  @media (max-width: 767px) {
    ${tw`p-2`}
  }
`;
