import tw from "twin.macro";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import InputFieldWithLabel from "../../common/components/InputField/InputField";
import { LightTheme } from "../../constants/CommonConstants";

export const HomePageWrapper = styled.div`
  ${tw`h-full w-full flex flex-col overflow-y-auto`}

  background-color: ${(props) =>
    props.theme === LightTheme ? "#f9f9f9" : "#0f0f0f"}
`;

export const SearchBarAndCardsContainer = styled.div`
  ${tw`p-6 h-full`}
`;

export const SearInputAndIconContainer = styled.div`
  ${tw`flex w-4/12 mb-6`}
`;
export const SearchIconContainer = styled.div`
  ${tw`px-6 flex items-center`}
  background-color: #f4f4f4;
  border: 1px solid #cccccc;
`;
export const SearchIcon = styled(IoIosSearch)`
  ${tw``}
`;

export const SearchField = styled(InputFieldWithLabel)`
  ${tw``}
  margin-bottom:-3px;
  height: 100%;
`;
