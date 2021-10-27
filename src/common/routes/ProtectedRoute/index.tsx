import { Component } from "react";
import { RouteProps } from "react-router";
import { Redirect, Route } from "react-router-dom";
import { LOGIN_IN_PATH } from "../../../constants/RouteConstants";
import { getAccessToken } from "../../../utils/StorageUtils";
// import Cookie from "js-cookie";

const ProtectedRoute = (props: RouteProps) => {
  const { component, ...others } = props;

  return getAccessToken() ? (
    <Route component={component} {...others} />
  ) : (
    <Redirect to={LOGIN_IN_PATH} />
  );
};

// const ProtectedRoute = (props: RouteProps) => {
//   const token = Cookie.get("jwt_token");
//   return token !== undefined ? (
//     <Route {...props} />
//   ) : (
//     <Redirect to={LOGIN_IN_PATH} />
//   );
// };

export default ProtectedRoute;
