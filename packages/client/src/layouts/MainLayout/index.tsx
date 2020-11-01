import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import { Container } from '@material-ui/core';

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <TopBar />
      <Container>
          {children}
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
