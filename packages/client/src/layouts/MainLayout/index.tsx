import React from 'react';
import { Container } from '@material-ui/core';
import TopBar from '../TopBar';
import Footer from './Footer';
import { ContentWrapper, MainLayoutWrapper } from './styles';

const MainLayout = ({ children }: any) => {
  return (
    <MainLayoutWrapper>
      <TopBar />



      <ContentWrapper>
        <Container>{children}</Container>
      </ContentWrapper>
      <Footer />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
