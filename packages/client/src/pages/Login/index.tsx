import React from 'react';
import {Box, Card, CardContent, Container, Grid, Link, Typography} from '@material-ui/core';
import { LockRounded } from '@material-ui/icons/';
import { FormattedMessage } from 'react-intl';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <Container maxWidth="xs">
      <Box mt={5}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" flexDirection="column">
              <LockRounded />
              <Typography component="h1" variant="h5">
                <FormattedMessage id="login" />
              </Typography>
              <LoginForm />
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
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
