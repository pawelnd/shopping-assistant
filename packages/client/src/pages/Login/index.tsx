import React from 'react';
import { Box, Card, CardContent, Container, Typography } from '@material-ui/core';
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
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
