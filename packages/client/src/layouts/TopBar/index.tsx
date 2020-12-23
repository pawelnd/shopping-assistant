import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { AppBarStart, AppBarContainer, AppBarCenter, AppBarEnd } from './styles';
import routes from '../../routes';
import { RootState } from '../../store/store';

export default function TopBar() {
  const history = useHistory();
  const { name, isLoggedIn } = useSelector((state: RootState) => state.auth);
  return (
    <AppBar position="static">
      <AppBarContainer>
        <AppBarStart onClick={() => history.push(routes.DASHBOARD)}>Shopping List</AppBarStart>
        <AppBarCenter />
        <AppBarEnd>
         Hello {name}
          {!isLoggedIn && (
            <Button color="inherit" onClick={() => history.push(routes.LOGIN)}>
              <FormattedMessage id="login" />
            </Button>
          )}
          {isLoggedIn && (
            <Button color="inherit" onClick={() => (window.location.href = '/api/auth/logout')}>
              <FormattedMessage id="logout" />
            </Button>
          )}
        </AppBarEnd>
      </AppBarContainer>
    </AppBar>
  );
}
