import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import {
  FailureViewWrapper,
  FailureViewTitle,
  FailureViewDescription,
  RetryButton,
} from "../../common/components/FailureView/styledComponents";
import { NoResultsImage } from "./stylesComponents";

interface NoSearchResultsPropTypes extends WithTranslation {
  onClickRetry: () => void;
  theme: string;
}

const NoSearchResults = (props: NoSearchResultsPropTypes) => {
  const { onClickRetry, theme, t } = props;

  return (
    <FailureViewWrapper>
      <NoResultsImage
        alt={t("noSearchResults.imageAltText")}
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <FailureViewTitle theme={theme}>
        {t("noSearchResults.title")}
      </FailureViewTitle>
      <FailureViewDescription theme={theme}>
        {t("noSearchResults.description")}
      </FailureViewDescription>
      <RetryButton onClick={onClickRetry}>
        {t("noSearchResults.retryButtonText")}
      </RetryButton>
    </FailureViewWrapper>
  );
};

export default withTranslation()(NoSearchResults);
