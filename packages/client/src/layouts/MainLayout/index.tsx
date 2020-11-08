import React from 'react';
import { Container } from '@material-ui/core';
import TopBar from './TopBar';
import Footer from './Footer';
import { MainLayoutWrapper } from './styles';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <TopBar />
      <MainLayoutWrapper>
        <Container>{children}</Container>
      </MainLayoutWrapper>
      <Footer />
    </>
  );
};

export default MainLayout;
