import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ThirdWheelLogo from '../../assets/images/third-wheel.png';

interface ILogoProps {
  color?: "white" | "dark";
}


const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  width: auto;
  ${tw`
    h-6
    md:h-9
    `}
  img {
    width: auto;
    height: 100%;
  }
`;


const Logo = ({ color } : ILogoProps) => {
  return <LogoContainer>
    <Image>
      <img src={ThirdWheelLogo} alt="logo" />
    </Image>
    <LogoText color={color || "dark"}>ThirdWheel</LogoText>
  </LogoContainer>
}

export default Logo;
