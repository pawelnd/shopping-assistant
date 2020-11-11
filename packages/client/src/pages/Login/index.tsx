import React from 'react';
import { Box, Button, Card, CardContent, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { LockRounded } from '@material-ui/icons/';
import LoginForm from './LoginForm';
import {FormattedMessage} from "react-intl";

export default function Login() {
  return (
    <Container maxWidth="xs">
      <Box mt={5}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" flexDirection="column">
              <LockRounded />
              <Typography component="h1" variant="h5">
                <FormattedMessage id="login"></FormattedMessage>
              </Typography>
              <LoginForm />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
