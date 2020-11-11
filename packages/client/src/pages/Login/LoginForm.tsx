import React from 'react';
import { Button, FormControlLabel, Grid, Link, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const LoginForm = () => {
  return (
    <form noValidate>
      <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
      <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
