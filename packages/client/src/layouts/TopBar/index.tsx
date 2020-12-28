import React from 'react';
import { AppBar, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AppBarStart, AppBarContainer, AppBarCenter, AppBarEnd } from './styles';
import routes from '../../routes';
import { RootState } from '../../store/store.types';

export default function TopBar() {
  const history = useHistory();
  const { t } = useTranslation();
  const { name, isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <AppBar position="static">
      <AppBarContainer>
        <AppBarStart onClick={() => history.push(routes.DASHBOARD)}>Shopping List</AppBarStart>
        <AppBarCenter />
        <AppBarEnd>
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
        </AppBarEnd>
      </AppBarContainer>
    </AppBar>
  );
}
