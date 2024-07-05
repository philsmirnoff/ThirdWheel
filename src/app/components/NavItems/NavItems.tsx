import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../Responsive/screen-constants";
import menuStyles from "../NavBar/menuStyles";
import { css } from "styled-components";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
    `}
`;

const NavItem = styled.li<{ menu ?: any}>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-bold
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
    `}

    a {
    text-decoration: none;
    color: inherit;
  }

   ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;


const NavItems = () => {

const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

if (isMobile)
  return (
    <Menu right styles={menuStyles}>
      <ListContainer>
        <NavItem menu>
          <a href="#">Home</a>
        </NavItem>
        <NavItem menu>
          <a href="#">Cars</a>
        </NavItem>
        <NavItem menu>
          <a href="#">Motorcycles</a>
        </NavItem>
        <NavItem menu>
          <a href="#">eBikes</a>
        </NavItem>
        <NavItem menu>
          <a href="#">Services</a>
        </NavItem>
        <NavItem menu>
          <a href="#">Contact Us</a>
        </NavItem>
      </ListContainer>
    </Menu>
  );

  return (
    <ListContainer>
      <NavItem>
        <a href="#">Home</a>
      </NavItem>
      <NavItem>
        <a href="#">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#">Motorcycles</a>
      </NavItem>
      <NavItem>
        <a href="#">eBikes</a>
      </NavItem>
      <NavItem>
        <a href="#">Services</a>
      </NavItem>
      <NavItem>
        <a href="#">Contact Us</a>
      </NavItem>
    </ListContainer>
  );
};

export default NavItems;
