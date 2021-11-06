import tw from "twin.macro";
import styled from "styled-components";
import { LightTheme } from "../../../constants/CommonConstants";

export const HeaderWrapper = styled.div`
  ${tw`flex items-center py-4 pl-10`}

  background-color: ${(props) =>
    props.theme === LightTheme ? "#f1f1f1" : "#181818"};
`;

export const LogoContainer = styled.div`
  ${tw`flex items-center mr-4 p-4`}
  border-radius:40px;
  background-color: ${(props) =>
    props.theme === LightTheme ? "#e2e8f0" : "#0f0f0f"};
`;

export const Title = styled.div`
  ${tw`font-bold`}
  font-family: 'Roboto';
  font-size: 20px;
  color: ${(props) => (props.theme === LightTheme ? "#1e293b" : "#f8fafc")};
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
