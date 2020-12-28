import React from 'react';
import { Box, Card, CardContent, Container, Typography } from '@material-ui/core';
import { LockRounded } from '@material-ui/icons/';
import { useTranslation } from 'react-i18next';
import FacebookLoginButton from '../../components/FacebookLoginButton';

export default function Login() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xs">
      <Box mt={5}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" flexDirection="column">
              <LockRounded />
              <Typography component="h1" variant="h5">
                {t('login')}
              </Typography>
              <FacebookLoginButton />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
