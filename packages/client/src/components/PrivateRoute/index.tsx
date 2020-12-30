import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import routes from '../../routes';

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
}
export const PrivateRoute: React.FC<PrivateRouteProps> = (props: PrivateRouteProps) => {
  const { path, exact, component, isAuthenticated } = props;

  return isAuthenticated ? <Route path={path} exact={exact} component={component} /> : <Redirect to={routes.LOGIN} />;
};

export default PrivateRoute;
