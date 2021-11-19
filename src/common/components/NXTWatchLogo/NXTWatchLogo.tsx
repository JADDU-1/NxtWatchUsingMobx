import React from "react";
import { DarkTheme } from "../../../constants/CommonConstants";
import { NxtLogo, NxtLogoContainer } from "./styledComponents";

interface NxtWatchLogoPropTypes {
  className?: string;
  shouldShowNxtDarkIcon?: string;
}

const NxtWatchLogo = (props: NxtWatchLogoPropTypes) => {
  const { className, shouldShowNxtDarkIcon } = props;

  return (
    <NxtLogoContainer className={className}>
      {shouldShowNxtDarkIcon === DarkTheme ? (
        <NxtLogo
          alt="Nxt Dark Logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
        />
      ) : (
        <NxtLogo
          alt="Nxt Light Logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
      )}
    </NxtLogoContainer>
  );
};

export default NxtWatchLogo;
