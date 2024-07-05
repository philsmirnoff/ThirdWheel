import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import NavBar from '../../components/NavBar';
import TopSection from '../../components/HeroSection/HeroSection';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    ml-2
    `}
`;


const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
    </PageContainer>
  );
};

export default HomePage;
