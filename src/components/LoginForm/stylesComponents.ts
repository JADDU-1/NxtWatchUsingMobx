import tw from "twin.macro";
import styled from "styled-components";

export const LoginFormContainer = styled.div`
  ${tw`p-12  rounded-lg`}
  box-shadow: 1px 3px 10px 10px #e2e8f0;
  min-width: 300px;
  @media (max-width: 768px) {
    min-width: 0px;
  }
`;

export const NxtLogoContainer = styled.div`
  ${tw`text-center mb-8`}
`;

export const NxtLogo = styled.img`
  ${tw``}
  height:38px;
`;
export const Form = styled.form`
  ${tw``}
`;

export const ShowShowPasswordContainer = styled.div`
  ${tw``}
`;

export const ShouldShowPasswordLabel = styled.label`
  ${tw`text-sm`}
`;

export const Checkbox = styled.input`
  margin-left: 0px;
  margin-right: 6px;
`;

export const LoginButton = styled.button`
  ${tw`rounded-lg border-none font-bold py-2 w-full mt-6 text-sm`}
  color:#ffffff;
  background-color: #3b82f6;
`;

export const LoginError = styled.p`
  ${tw`text-center`}
  height:20px;
  font-size: 12px;
  font-weight: 600;
  color: #cf1124;
  margin-top: 2px;
`;
