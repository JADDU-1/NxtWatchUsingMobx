import React, { Component } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import CommonContext from "./context";
import "./App.css";
import CommonRoute from "./common/routes/CommonRoute";
import stores from "./stores";
import { observer, Provider } from "mobx-react";
import { observable, action } from "mobx";
import { LightTheme, HomePage, DarkTheme } from "./constants/CommonConstants";

@observer
class App extends Component {
  @observable selectedTheme: string;
  @observable selectedPage: string;

  constructor(props: any) {
    super(props);
    this.selectedTheme = LightTheme;
    this.selectedPage = HomePage;
  }

  @action.bound
  onChangeTheme = () => {
    this.selectedTheme =
      this.selectedTheme === LightTheme ? DarkTheme : LightTheme;
    console.log(this.selectedTheme);
  };

  @action.bound
  onChangeSelectedPage = (pageName: string) => {
    console.log(1);
    this.selectedPage = pageName;
  };

  render() {
    const { selectedTheme, selectedPage } = this;
    return (
      <Provider {...stores}>
        <CommonContext.Provider
          value={{
            selectedTheme,
            onChangeTheme: this.onChangeTheme,
            selectedPage,
            onChangeSelectedPage: this.onChangeSelectedPage,
          }}
        >
          <I18nextProvider i18n={i18n}>
            <CommonRoute />
          </I18nextProvider>
        </CommonContext.Provider>
      </Provider>
    );
  }
}

export default App;
