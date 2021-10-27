import React from "react";
import {
  GamingPage,
  HomePage,
  TrendingVideosPage,
} from "../../../constants/CommonConstants";
import {
  HOME_PAGE_PATH,
  TRENDING_VIDEOS_PAGE,
  GAMING_PAGE_PATH,
  SAVED_VIDEOS_PAGE,
} from "../../../constants/RouteConstants";
import {
  Option,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  OptionText,
  SavedVideosIcon,
} from "./styledComponents";

interface OptionDetails {
  id: string;
  optionText: string;
}

interface EachSideBarOptionPropTypes {
  selectedTheme: string;
  eachOptionDetails: OptionDetails;
  selectedPage: string;
  onChangeSelectedPage: Function;
}

const EachSideBarOption = (props: EachSideBarOptionPropTypes) => {
  const {
    eachOptionDetails,
    selectedTheme,
    onChangeSelectedPage,
    selectedPage,
  } = props;
  const { id, optionText } = eachOptionDetails;

  const getIcon = () => {
    switch (id) {
      case HomePage:
        return <HomeIcon theme={selectedTheme} />;
      case TrendingVideosPage:
        return <TrendingIcon theme={selectedTheme} />;
      case GamingPage:
        return <GamingIcon theme={selectedTheme} />;
      default:
        return <SavedVideosIcon theme={selectedTheme} />;
    }
  };

  const getPagePath = () => {
    switch (id) {
      case HomePage:
        return HOME_PAGE_PATH;
      case TrendingVideosPage:
        return TRENDING_VIDEOS_PAGE;
      case GamingPage:
        return GAMING_PAGE_PATH;
      default:
        return SAVED_VIDEOS_PAGE;
    }
  };
  const isSelectedOption = selectedPage === id ? true : false;

  return (
    <Option
      to={getPagePath()}
      onClick={() => {
        onChangeSelectedPage(id);
      }}
      theme={isSelectedOption}
      color={selectedTheme}
    >
      {getIcon()}
      <OptionText theme={selectedTheme}>{optionText}</OptionText>
    </Option>
  );
};

export default EachSideBarOption;
