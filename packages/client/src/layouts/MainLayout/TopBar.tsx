import React from 'react';
import {AppBar, Button, Toolbar} from "@material-ui/core";

export default function TopBar() {
  return <AppBar position="static">
    <Toolbar>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>;
}
