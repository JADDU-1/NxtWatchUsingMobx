import tw from "twin.macro";
import styled from "styled-components";

export const InputContainer = styled.div`
  ${tw` flex flex-col  w-full `}
  height: 78px;
`;

export const LabelTag = styled.label`
  ${tw` text-sm font-bold `}
  color: #7e858e;
`;

export const InputTag = styled.input`
  ${tw`mb-1  rounded-sm`}
  font-size:15px;
  height: 29px;
  border: 1px solid #cccccc;
  color: #7e858e;
`;

export const ErrorMessage = styled.p`
  ${tw`font-bold m-0`}
  font-size: 12px;
  color: #cf1124;
`;

export const InputFieldWithErrorMessage = styled.div`
  width: 100%;
`;
