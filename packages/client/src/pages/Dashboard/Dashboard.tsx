import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import { toaster } from '../../components/Toaster';

const Dashboard = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    if (!loading) {
      return;
    }
    axios
      .get('/api/post')
      .then((response) => setPosts(response.data))
      .finally(() => setLoading(false));
  }, [loading]);

  const onSubmit = (data: any) => {
    console.log(data);
    axios
      .post('/api/post', data)
      .then((response) => console.log(response))
      .finally(() => setLoading(true));
  };

  const removeAll = () => {
    return axios
      .delete('/api/post/all')
      .then((response) => console.log(response))
      .finally(() => setLoading(true));
  };
  return (
    <div>
      <div>{JSON.stringify(posts)}</div>
      <div>{posts == null ? 'Loading' : ''}</div>

      <Button
        onClick={async () => {
          await removeAll();
          toaster.showSuccess();
        }}
      >
        Remove all
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="content" ref={register} />
        <input name="title" ref={register} />
        <input name="c" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Dashboard;
