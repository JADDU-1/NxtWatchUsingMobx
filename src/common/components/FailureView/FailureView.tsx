import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { LightTheme } from "../../../constants/CommonConstants";
import {
  FailureViewWrapper,
  FailureImage,
  FailureViewDescription,
  FailureViewTitle,
  RetryButton,
} from "./styledComponents";

interface FailureViewPropTypes extends WithTranslation {
  onClickRetry: () => void;
  theme?: string;
}

const FailureView = (props: FailureViewPropTypes) => {
  const { onClickRetry, theme, t } = props;

  return (
    <FailureViewWrapper>
      {theme === LightTheme ? (
        <FailureImage
          alt={t("failureView.failureViewLightTheme")}
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        />
      ) : (
        <FailureImage
          alt={t("failureView.failureViewDarkTheme")}
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        />
      )}
      <FailureViewTitle theme={theme}>
        {t("failureView.title")}
      </FailureViewTitle>
      <FailureViewDescription theme={theme}>
        {t("failureView.description")}
      </FailureViewDescription>
      <RetryButton onClick={onClickRetry}>
        {t("failureView.retryButtonText")}
      </RetryButton>
    </FailureViewWrapper>
  );
};

export default withTranslation()(FailureView);
