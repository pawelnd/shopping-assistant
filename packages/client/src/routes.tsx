import React from 'react';
import { Route } from 'react-router';
import MainLayout from './components/MainLayout';

export default function () {
  return (
    <>
      works2
      <Route component={MainLayout} path="/" />
    </>
  );
}
