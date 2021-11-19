import React from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { VIDEO_DETAILS } from "../../constants/RouteConstants";
import HomePageEachVideoModel from "../../stores/models/HomePageModel";
import {
  LinkEle,
  DetailsContainer,
  VideoTitle,
  Views,
} from "../HomePageVideoCard/stylesComponents";
import { ImgContainer, Image, Card } from "./styledComponents";

interface GamePageCardProprTypes extends WithTranslation {
  eachVideoDetails: HomePageEachVideoModel;
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
        <DetailsContainer>
          <VideoTitle theme={theme}>{title}</VideoTitle>
          <Views theme={theme}>
            {viewsCount} {t("gaming.watchingWorldWideText")}
          </Views>
        </DetailsContainer>
      </LinkEle>
    </Card>
  );
};

export default withTranslation()(GamePageCard);
