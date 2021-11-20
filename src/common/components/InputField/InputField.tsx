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
  onChangeFunction: Function;
  errorMessage?: string;
  shouldShowErrorMessage?: boolean;
  placeHolderText: string;
  labelText?: string;
  enteredValue?: string;
  shouldShowLabel?: boolean;
  className?: string;
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
      shouldShowLabel,
      className,
    } = this.props;

    const onChangeSearchInput = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      onChangeFunction(event.target.value);
    };

    return (
      <InputContainer className={className}>
        {shouldShowLabel && (
          <LabelTag htmlFor={labelText}>{labelText}</LabelTag>
        )}
        <InputTag
          id={labelText}
          type={fieldType}
          onChange={onChangeSearchInput}
          placeholder={placeHolderText}
          value={enteredValue}
        />
        {errorMessage !== "" && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputContainer>
    );
  }
}
export default InputFieldWithLabel;
