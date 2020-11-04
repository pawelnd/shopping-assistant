import React from 'react';
import { Container } from '@material-ui/core';
import TopBar from './TopBar';
import Footer from './Footer';

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <TopBar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
