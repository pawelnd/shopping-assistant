import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import { Button, Container, FormControlLabel, Grid, Link, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import CardHeader from '@material-ui/core/CardHeader';
import { LoginCard } from './styles';

export default function Login() {
  return (
    <Container maxWidth="xs">
      <LoginCard>
        <CardHeader>
          sadsdassadasd
          <br />
          <br />
        </CardHeader>
        <CardContent>
          <form noValidate>
            <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
            <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </LoginCard>
    </Container>
  );
}
