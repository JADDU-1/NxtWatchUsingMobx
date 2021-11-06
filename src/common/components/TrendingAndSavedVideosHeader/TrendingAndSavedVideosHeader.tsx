import React from "react";
import { HeaderWrapper, LogoContainer, Title } from "./styledComponents";

interface CommonBannerPropTypes {
  titleText: string;
  logoComponent: React.ReactNode;
  theme: string;
}

const CommonBanner = (props: CommonBannerPropTypes) => {
  const { logoComponent, titleText, theme } = props;
  return (
    <HeaderWrapper theme={theme}>
      <LogoContainer theme={theme}>{logoComponent}</LogoContainer>
      <Title theme={theme}>{titleText}</Title>
    </HeaderWrapper>
  );
};

export default CommonBanner;
