import { Router, Response, Request, NextFunction } from 'express';
import NotFoundIdException from './exceptions/NotFoundIdException';

export class lala {
  public method1(req, resp) {
    console.log('before breakpoint');

    console.log(1);
    console.log(`${1}aaa`);
    console.log(`${2}aaa`);
    console.log(`${3}aaa`);
    console.log(`${4}aaa`);
    console.log(`${5}aaa`);

    try {
      throw new NotFoundIdException('11');
    } catch (e) {
      console.log('cccccc');
    }

    return 'SIALALALA';
  }
}
