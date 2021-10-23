import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import CommonContext from "./context";
import "./App.css";
import CommonRoute from "./common/routes/CommonRoute";
import stores from "./stores";
import { Provider } from "mobx-react";

const App = () => {
  const selectedTheme = "light";
  return (
    <Provider {...stores}>
      {/* <CommonContext.Provider value={{ selectedTheme }}> */}
      <I18nextProvider i18n={i18n}>
        <CommonRoute />
      </I18nextProvider>

      {/* </CommonContext.Provider> */}
    </Provider>
  );
};

export default App;
