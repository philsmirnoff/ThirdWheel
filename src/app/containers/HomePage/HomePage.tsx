import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import NavBar from '../../components/NavBar';
import BookCard from '../../components/BookCard';
import HeroSection from '../../components/HeroSection/HeroSection';
import { Marginer } from '../../components/Marginer/Marginer';
import BookingSteps from '../../components/BookingSteps/BookingSteps';
import AboutUs from '../../components/AboutUs/AboutUs';
import TopCars from '../../components/TopCars/TopCars';
import Footer from '../../components/Footer/Footer';

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
      <HeroSection />
      <Marginer direction="vertical" margin="2em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
