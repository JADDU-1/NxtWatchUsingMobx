import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { LoaderContainer } from "./styledComponents";

const LoaderComponent = () => (
  <LoaderContainer>
    <Loader type="ThreeDots" color="red" height="50" width="50" />
  </LoaderContainer>
);

export default LoaderComponent;
