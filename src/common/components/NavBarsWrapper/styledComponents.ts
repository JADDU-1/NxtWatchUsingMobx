import tw from "twin.macro";
import styled from "styled-components";
import { LightTheme } from "../../../constants/CommonConstants";

export const CommonWrapper = styled.div`
  ${tw`h-screen flex flex-col overflow-y-auto`}

  background-color: ${(props) =>
    props.theme === LightTheme ? "#ffffff" : "#212121"};
`;

export const SideBarAndComponentContainer = styled.div`
  ${tw`flex flex-grow`}
`;
