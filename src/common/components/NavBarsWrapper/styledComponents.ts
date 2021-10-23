import tw from "twin.macro";
import styled from "styled-components";

export const CommonWrapper = styled.div`
  ${tw`h-screen flex flex-col`}
`;

export const SideBarAndComponentContainer = styled.div`
  ${tw`flex flex-grow`}
  border:1px solid blue;
`;
