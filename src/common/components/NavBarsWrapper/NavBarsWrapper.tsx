import { action, observable } from "mobx";
import { observer } from "mobx-react";
import React, { Component } from "react";
import {
  LightTheme,
  DarkTheme,
  HomePage,
} from "../../../constants/CommonConstants";
import CommonContext from "../../../context";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import SideNavBar from "../SideNavBar";

import {
  CommonWrapper,
  SideBarAndComponentContainer,
} from "./styledComponents";

interface NavbarWrapperPropTypes {
  component: React.ReactNode;
}

@observer
class NavBarsWrapper extends Component<NavbarWrapperPropTypes> {
  @observable shouldShowMenuPopUp: boolean = false;

  onChangeMenuStatus = () => {
    this.shouldShowMenuPopUp = !this.shouldShowMenuPopUp;
  };

  render() {
    const { component } = this.props;
    const { shouldShowMenuPopUp, onChangeMenuStatus } = this;
    return (
      <CommonContext.Consumer>
        {(value) => {
          const { selectedTheme } = value;
          return (
            <CommonWrapper theme={selectedTheme}>
              <HeaderNavbar onChangeMenuStatus={onChangeMenuStatus} />
              <SideBarAndComponentContainer>
                <SideNavBar
                  shouldShowMenuPopUp={shouldShowMenuPopUp}
                  onChangeMenuStatus={onChangeMenuStatus}
                />
                {component}
              </SideBarAndComponentContainer>
            </CommonWrapper>
          );
        }}
      </CommonContext.Consumer>
    );
  }
}

export default NavBarsWrapper;
