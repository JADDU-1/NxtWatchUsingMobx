import tw from "twin.macro";
import styled from "styled-components";
import { LightTheme } from "../../../constants/CommonConstants";

export const FailureViewWrapper = styled.div`
  ${tw`h-full w-full flex flex-col items-center justify-center flex-grow`}
`;

export const FailureImage = styled.img`
  ${tw``}
  height: 270px;
`;

export const FailureViewTitle = styled.h3`
  ${tw`font-bold text-base m-0 mt-8`}
  color: ${(props) => (props.theme === LightTheme ? "#1e293b" : "#f8fafc")};
  font-family: "Roboto";
`;

export const FailureViewDescription = styled.p`
  ${tw`m-0 mt-4 mb-6`}
  color: ${(props) => (props.theme === LightTheme ? "#475569" : "#94a3b8")};
  font-family: "Roboto";
  font-size: 16px;
`;

export const RetryButton = styled.button`
  ${tw`border-none font-bold rounded px-4 py-2 cursor-pointer`}
  color: #ffffff;
  background-color: #4f46e5;
  font-family: "Roboto";
  font-size: 12px;
  outline: none;
`;
