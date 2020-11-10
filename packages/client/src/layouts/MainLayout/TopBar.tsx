import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { AppBarWrapper } from './styles';

export default function TopBar() {
  return (
    <AppBar position="static">
      <AppBarWrapper>
        <b>Shopping List </b>
        <Button color="inherit">Login</Button>
      </AppBarWrapper>
    </AppBar>
  );
}
