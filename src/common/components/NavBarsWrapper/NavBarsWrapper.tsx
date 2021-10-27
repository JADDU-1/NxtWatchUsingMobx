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

const NavBarsWrapper = (props: NavbarWrapperPropTypes) => {
  const { component } = props;
  return (
    <CommonContext.Consumer>
      {(value) => {
        const { selectedTheme } = value;

        return (
          <CommonWrapper theme={selectedTheme}>
            <HeaderNavbar />
            <SideBarAndComponentContainer>
              <SideNavBar />
              {component}
            </SideBarAndComponentContainer>
          </CommonWrapper>
        );
      }}
    </CommonContext.Consumer>
  );
};

export default NavBarsWrapper;
