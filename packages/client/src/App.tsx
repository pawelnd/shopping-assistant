import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import routes from './routes';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login';
import Test from './pages/Test';
import { getLoggedUserStart } from './store/features/authSlice/auth.slice';
import { RootState } from './store/store.types';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getLoggedUserStart());
  }, [dispatch]);

  return (
    <Router>
      <MainLayout>
        <Route exact path={routes.DASHBOARD} component={Dashboard} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.TEST} component={Test} />
        {!isLoggedIn && !isLoading && <Redirect to="/login" />}
      </MainLayout>
    </Router>
  );
};

export default App;
