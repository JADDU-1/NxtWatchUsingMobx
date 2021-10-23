import React, { Component } from "react";
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
    <CommonWrapper>
      <HeaderNavbar />
      <SideBarAndComponentContainer>
        <SideNavBar />
        {component}
      </SideBarAndComponentContainer>
    </CommonWrapper>
  );
};

export default NavBarsWrapper;
