import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import { AppBarStart, AppBarContainer, AppBarCenter, AppBarEnd } from './styles';
import routes from '../../routes';

export default function TopBar() {
  const history = useHistory();

  return (
    <AppBar position="static">
      <AppBarContainer>
        <AppBarStart onClick={() => history.push(routes.DASHBOARD)}>Shopping List</AppBarStart>
        <AppBarCenter />
        <AppBarEnd>
          <Button color="inherit" onClick={() => history.push(routes.LOGIN)}>
            <FormattedMessage id="login" />
          </Button>
        </AppBarEnd>
      </AppBarContainer>
    </AppBar>
  );
}
