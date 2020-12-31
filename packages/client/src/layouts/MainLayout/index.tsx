import React from 'react';
import { Wrapper, Footer, Header, Middle } from './styles';
import TopBar from '../../components/TopBar';
import { Container } from '@material-ui/core';

const MainLayout = ({ children }: any) => {
  return (
    <Wrapper>
      <Header>
        <Container>
          <TopBar />
        </Container>
      </Header>
      <Middle>
        <Container>{children}</Container>
      </Middle>
      <Footer>Footer</Footer>
    </Wrapper>
  );
};

export default MainLayout;
