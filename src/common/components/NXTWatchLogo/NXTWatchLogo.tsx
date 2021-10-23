import React, { Component } from "react";
import { NxtLogo, NxtLogoContainer } from "./styledComponents";

interface NxtWatchLogoPropTypes {
  className?: any;
}

const NxtWatchLogo = (props: NxtWatchLogoPropTypes) => {
  const { className } = props;
  return (
    <NxtLogoContainer className={className}>
      <NxtLogo
        alt="altText"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      />
    </NxtLogoContainer>
  );
};

export default NxtWatchLogo;
