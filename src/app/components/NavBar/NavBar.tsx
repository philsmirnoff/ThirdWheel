import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../Logo";
import NavItems from "../NavItems";

const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
    `}
`;

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    `}
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavBarContainer>
  );
};

export default NavBar;
