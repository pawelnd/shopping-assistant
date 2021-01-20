import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.types';
import { Container, Logo, RightSideButtons, Wrapper } from './styles';
import TopBarMenu from '../TopBarMenu';

export default function TopBar() {
  const { isLoggedIn, loggedUser } = useSelector((state: RootState) => state.auth);

  const signOut = () => {
    window.location.href = '/api/auth/logout';
  };
  return (
    <Container>
      <Wrapper>
        <Logo>sl</Logo>
        <RightSideButtons>{isLoggedIn && <TopBarMenu loggedUser={loggedUser} handleSignOut={signOut} />}</RightSideButtons>
      </Wrapper>
    </Container>
  );
}
