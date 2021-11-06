import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { theme } from "twin.macro";
import { VIDEO_DETAILS } from "../../constants/RouteConstants";
import {
  CardWrapper,
  LinkEle,
  DetailsContainer,
  VideoTitle,
  Views,
} from "../HomePageVideoCard/stylesComponents";
import { ImgContainer, Image, Card } from "./styledComponents";

interface GamePageCardProprTypes extends WithTranslation {
  eachVideoDetails: any;
  theme: string;
}

const GamePageCard = (props: GamePageCardProprTypes) => {
  const { t, eachVideoDetails, theme } = props;
  const { id, title, thumbnailUrl, viewsCount } = eachVideoDetails;

  return (
    <Card>
      <LinkEle to={`${VIDEO_DETAILS}${id}`}>
        <ImgContainer>
          <Image src={thumbnailUrl} />
        </ImgContainer>
        {/* <VideoDetailsContainer> */}
        <DetailsContainer>
          <VideoTitle theme={theme}>{title}</VideoTitle>
          <Views theme={theme}>
            {viewsCount} {t("gaming.watchingWorldWideText")}
          </Views>
        </DetailsContainer>
        {/* </VideoDetailsContainer> */}
      </LinkEle>
    </Card>
  );
};

export default withTranslation()(GamePageCard);
