import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  GAMING_PAGE_PATH,
  HOME_PAGE_PATH,
  LOGIN_IN_PATH,
  SAVED_VIDEOS_PAGE,
  TRENDING_VIDEOS_PAGE,
  VideoDetailsId,
  VIDEO_DETAILS,
} from "../../constants/RouteConstants";
import GamingRoute from "../../routes/GamingRoute/GamingRoute";
import HomePageRouter from "../../routes/HomePageRouter/HomePageRouter";
import LoginPageRoute from "../../routes/LoginPageRouter/LoginPageRouter";
import SavedVideosRoute from "../../routes/SavedVideosRoute/SavedVideosRoute";
import TrendingVideosRoute from "../../routes/TrendingVideosRoute/TrendingVideosRoute";
import VideoItemDetailsRoute from "../../routes/VideoItemDetailsRoute/VideoItemDetailsRoute";
import ProtectedRoute from "./ProtectedRoute";

const CommonRoute = () => (
  <Router>
    <Switch>
      <Route
        exact
        path={LOGIN_IN_PATH}
        key={LOGIN_IN_PATH}
        component={LoginPageRoute}
      />
      <ProtectedRoute
        exact
        path={HOME_PAGE_PATH}
        key={HOME_PAGE_PATH}
        component={HomePageRouter}
      />
      <ProtectedRoute
        exact
        path={TRENDING_VIDEOS_PAGE}
        key={TRENDING_VIDEOS_PAGE}
        component={TrendingVideosRoute}
      />
      <ProtectedRoute
        exact
        path={GAMING_PAGE_PATH}
        key={GAMING_PAGE_PATH}
        component={GamingRoute}
      />
      <ProtectedRoute
        exact
        path={SAVED_VIDEOS_PAGE}
        key={SAVED_VIDEOS_PAGE}
        component={SavedVideosRoute}
      />
      <ProtectedRoute
        exact
        path={`${VIDEO_DETAILS}:id`}
        key={`${VIDEO_DETAILS}:id`}
        component={VideoItemDetailsRoute}
      />
    </Switch>
  </Router>
);

export default CommonRoute;
