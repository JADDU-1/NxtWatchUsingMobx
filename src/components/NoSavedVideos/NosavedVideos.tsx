import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import {
  FailureViewWrapper,
  FailureViewTitle,
  FailureViewDescription,
} from "../../common/components/FailureView/styledComponents";
import { NoSavedVideosImage } from "./stylesComponents";

interface NoSavedVideosPropTypes extends WithTranslation {
  theme: string;
}

const NoSavedVideos = (props: NoSavedVideosPropTypes) => {
  const { t, theme } = props;
  return (
    <FailureViewWrapper>
      <NoSavedVideosImage
        alt={t("noSavedVideos.imageAltText")}
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
      />
      <FailureViewTitle theme={theme}>
        {t("noSavedVideos.title")}
      </FailureViewTitle>
      <FailureViewDescription theme={theme}>
        {t("noSavedVideos.description")}
      </FailureViewDescription>
    </FailureViewWrapper>
  );
};

export default withTranslation()(NoSavedVideos);
