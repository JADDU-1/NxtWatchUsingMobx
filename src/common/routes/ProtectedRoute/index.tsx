import { Component } from "react";
import { RouteProps } from "react-router";
import { Redirect, Route } from "react-router-dom";
import { LOGIN_IN_PATH } from "../../../constants/RouteConstants";
import { getAccessToken } from "../../../utils/StorageUtils";

const ProtectedRoute = (props: RouteProps) => {
  const { component, ...others } = props;

  return getAccessToken() ? (
    <Route component={component} />
  ) : (
    <Redirect to={{ pathname: LOGIN_IN_PATH }} />
  );
};

export default ProtectedRoute;
