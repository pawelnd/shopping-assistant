import React, { useRef } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import routes from './routes';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login';
import Test from './pages/Test';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Route exact path={routes.DASHBOARD} component={Dashboard} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.TEST} component={Test} />
        {/* <Redirect to="/login" /> */}
      </MainLayout>
    </Router>
  );
};

export default App;
