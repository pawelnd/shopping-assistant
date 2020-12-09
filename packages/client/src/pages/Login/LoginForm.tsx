import React, { useCallback, useState } from 'react';
import { Button, FormControlLabel, Grid, Link, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(true);
  const { FACEBOOK_APP_ID } = process.env;
  const onSubmit = (data: any) => {
    console.log(data);
    axios
      .post('/api/auth/facebook', data)
      .then((response) => console.log(response))
      .finally(() => setLoading(true));
  };

  const getRedirectUrl = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <a href="/api/auth/facebook">Facebook login</a>
      <input name="username" value="email@email.com" ref={register} />
      <input name="password" value="password" ref={register} />
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
