import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import routes from './routes';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login';
import Test from './pages/Test';
import { getLoggedUserStart } from './store/features/authSlice/auth.slice';
import { PrivateRoute } from './components/PrivateRoute';
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
        <Switch>
          <PrivateRoute exact path={routes.DASHBOARD} isAuthenticated={isLoggedIn} component={Dashboard} />
          <PrivateRoute path={routes.TEST} isAuthenticated={isLoggedIn} component={Test} />
          <Route path={routes.LOGIN} component={Login} />
          {isLoading ? null : <Redirect to={isLoggedIn ? routes.DASHBOARD : routes.LOGIN} />}
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
