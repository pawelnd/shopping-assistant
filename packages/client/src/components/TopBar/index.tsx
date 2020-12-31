import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import routes from '../../routes';
import { RootState } from '../../store/store.types';
import { Container, Logo, RightSideButtons, Wrapper } from './styles';

export default function TopBar() {
  const history = useHistory();
  const { t } = useTranslation();
  const { name, isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <Container>
      <Wrapper>
        <Logo>SL</Logo>
        <RightSideButtons>
          {t('welcomeMessage', { name })}
          {!isLoggedIn && (
            <Button color="inherit" onClick={() => history.push(routes.LOGIN)}>
              {t('login')}
            </Button>
          )}
          {isLoggedIn && (
            <Button color="inherit" onClick={() => (window.location.href = '/api/auth/logout')}>
              {t('logout')}
            </Button>
          )}
        </RightSideButtons>
      </Wrapper>
    </Container>
  );
}
