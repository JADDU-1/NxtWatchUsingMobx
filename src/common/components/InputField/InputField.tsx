import { observer } from "mobx-react";
import React, { Component } from "react";
import {
  InputContainer,
  LabelTag,
  InputTag,
  ErrorMessage,
} from "./stylesComponents";

interface InputElementProps {
  fieldType: string;
  onChangeFunction: any;
  errorMessage?: string;
  shouldShowErrorMessage?: boolean;
  placeHolderText: string;
  labelText?: string;
  enteredValue?: any;
}

@observer
class InputFieldWithLabel extends Component<InputElementProps> {
  render() {
    const {
      fieldType,
      onChangeFunction,
      errorMessage,
      placeHolderText,
      labelText,
      shouldShowErrorMessage,
      enteredValue,
    } = this.props;

    return (
      <InputContainer>
        <LabelTag htmlFor={labelText}>{labelText}</LabelTag>
        <InputTag
          id={labelText}
          type={fieldType}
          onChange={onChangeFunction}
          placeholder={placeHolderText}
          value={enteredValue}
        />
        {errorMessage !== "" && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputContainer>
    );
  }
}
export default InputFieldWithLabel;
