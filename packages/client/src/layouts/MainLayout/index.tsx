import React from 'react';
import { Container } from '@material-ui/core';
import { Wrapper, FooterContainer, Header, Middle } from './styles';
import TopBar from '../../components/TopBar';

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
    </Wrapper>
  );
};

export default MainLayout;
