import React from "react";
import { HomePage, LightTheme } from "../constants/CommonConstants";

const CommonContext = React.createContext({
  selectedTheme: LightTheme,
  onChangeTheme: () => {},
  selectedPage: HomePage,
  onChangeSelectedPage: (pageName: string) => {},
});

export default CommonContext;
