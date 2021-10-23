import tw from "twin.macro";
import styled from "styled-components";

export const LoginScreenContainer = styled.div`
  ${tw`h-screen w-screen flex flex-col items-center justify-center`}
  @media (max-width: 768px) {
    ${tw``}
  }
`;
