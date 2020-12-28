import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.types';
import { getLoggedUserStart } from '../../store/features/authSlice/auth.slice';

const Test = () => {
  const [state, setState] = useState({
    isAuthenticated: false,
    user: null as any,
    token: '',
    response: 'NONE',
    test: [1, 2, 3, 4]
  });

  const { name, email } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const APP_URL = 'api/';
  const POSTS_URI = `${APP_URL}posts`;

  const listPosts = () => {
    setState({ ...state, response: 'loading' });
    axios.get(POSTS_URI, { headers: { Authorization: state.token } }).then(
      (data) => {
        console.log(data);
        setState({ ...state, response: JSON.stringify(data) });
      },
      (data) => {
        console.log('error', data);
        setState({ ...state, response: JSON.stringify(data) });
      }
    );
  };

  const addPosts = () => {
    axios.post(POSTS_URI, { content: 'TEREFERE', title: 'SIALALAL' }).then((data) => console.log(data));
  };

  const testBtnClick = () => {
    setState({ ...state, response: `${1}` });
  };

  const logout = () => {
    setState({ ...state, isAuthenticated: false, token: '', user: null });
  };

  const content = state.isAuthenticated ? (
    <div>
      <p>Authenticated</p>
      <div>{state?.user?.email}</div>
      <div>{state.token}</div>
      <div>
        <Button onClick={logout} className="button">
          Log out
        </Button>
      </div>
    </div>
  ) : (
    <div>{/* <FacebookLogin appId={config.FACEBOOK_APP_ID} autoLoad={false} callback={facebookResponse} /> */}</div>
  );

  return (
    <div className="App">
      <div>
        Auth: {name} {email}
      </div>
      <Button onClick={(event) => dispatch(getLoggedUserStart())}>CheckLogin</Button>
      <hr />
      <Button color="primary" onClick={() => listPosts()}>
        GET POSTS
      </Button>
      <Button color="primary" onClick={() => addPosts()}>
        ADD POSTS
      </Button>
      <Button color="primary" onClick={() => testBtnClick()}>
        TEST
      </Button>
      1.{state.test}
      2.{content}
      3.{state.response}
    </div>
  );
};

export default Test;
