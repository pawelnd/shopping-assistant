import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import { AppBarLogo, AppBarContainer, AppBarRightButtons } from './styles';

export default function TopBar() {
  const history = useHistory();

  return (
    <AppBar position="static">
      <AppBarContainer>
        <AppBarLogo>Shopping List</AppBarLogo>
        <AppBarRightButtons>
          <Button color="inherit" onClick={() => history.push('/login')}>
            <FormattedMessage id="login" />
          </Button>
        </AppBarRightButtons>
      </AppBarContainer>
    </AppBar>
  );
}
