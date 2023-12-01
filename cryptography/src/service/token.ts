import jwt from 'jsonwebtoken';
import { IUser, IUserCreated } from '../interface';

const { SECRET } = process.env;

const encode = (payload: (IUser | IUserCreated)) => {
  if (SECRET) return jwt.sign({ ...payload }, SECRET);
} 

const decode = (token: string) => {
  try {
    if (SECRET)   return jwt.verify(token, SECRET);
  } catch (error) {
    throw new Error('Token invalido');
  }
}

export default {
  encode,
  decode
}