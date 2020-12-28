import React from 'react';
import { Container } from '@material-ui/core';
import Footer from './Footer';
import { ContentWrapper, MainLayoutWrapper } from './styles';
import TopBar from '../../components/TopBar';

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
