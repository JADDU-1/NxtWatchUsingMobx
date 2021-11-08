import React from "react";
import {
  GamingPage,
  HomePage,
  SavedVideosPage,
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
  EachOption,
} from "./styledComponents";

interface OptionDetails {
  id: string;
  path: string;
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
  const { path, optionText } = eachOptionDetails;

  const getIcon = () => {
    switch (path) {
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
    switch (path) {
      case SavedVideosPage:
        return SAVED_VIDEOS_PAGE;
      case TrendingVideosPage:
        return TRENDING_VIDEOS_PAGE;
      case GamingPage:
        return GAMING_PAGE_PATH;
      default:
        return HOME_PAGE_PATH;
    }
  };
  const isSelectedOption = selectedPage === path ? true : false;

  return (
    <Option to={getPagePath()}>
      <EachOption
        onClick={() => {
          onChangeSelectedPage(path);
        }}
        theme={isSelectedOption}
        color={selectedTheme}
      >
        {getIcon()}
        <OptionText theme={selectedTheme}>{optionText}</OptionText>
      </EachOption>
    </Option>
  );
};

export default EachSideBarOption;
