import React, { useEffect } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import routes from '../../routes';
import { useHistory } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
}
export const PrivateRoute: React.FC<PrivateRouteProps> = (props: PrivateRouteProps) => {
  const { path, exact, component, isAuthenticated } = props;
  const history = useHistory();

  useEffect(() => {
    console.log(11111111);
    if (isAuthenticated) {
      console.log('REDIRECT');
      history.push(routes.DASHBOARD);
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <Route path={path} exact={exact} component={component} /> : <Redirect to={routes.LOGIN} />;
};

export default PrivateRoute;
