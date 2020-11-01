import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import MainLayout from './layouts/MainLayout';

const App = () => {
  const routing = routes.map((route) => (
    <Route path={route.path} component={route.element} />
  ));

  return (
    <Router>
      <MainLayout>{routing}</MainLayout>
    </Router>
  );
};

export default App;
