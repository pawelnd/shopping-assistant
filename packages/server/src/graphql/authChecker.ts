import { AuthChecker } from 'type-graphql';
import { Context } from './context';

export const authChecker: AuthChecker<Context> = (
  { root, args, context, info },
  roles,
) => {
  console.log(11111111111);
  return true; // or false if access is denied
};
