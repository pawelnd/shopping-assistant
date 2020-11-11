import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import { AppBarStart, AppBarContainer, AppBarCenter, AppBarEnd } from './styles';

export default function TopBar() {
  const history = useHistory();

  return (
    <AppBar position="static">
      <AppBarContainer>
        <AppBarStart>Shopping List</AppBarStart>
        <AppBarCenter />
        <AppBarEnd>
          <Button color="inherit" onClick={() => history.push('/login')}>
            <FormattedMessage id="login" />
          </Button>
        </AppBarEnd>
      </AppBarContainer>
    </AppBar>
  );
}
