import { Container } from 'typedi';
import express from 'express';
import User from '../common/interfaces/user.interface';

export interface Context {
  req: express.Request;
  res: express.Response;
  injector: Container;
  currentUser?: User;
}

export const buildContext = (
  contextExtra: Pick<Context, 'req' | 'res'> & Partial<Context>,
): Context => ({
  injector: Container,
  currentUser: undefined,
  ...contextExtra,
});