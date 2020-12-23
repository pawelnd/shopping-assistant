import axios from 'axios';
import { User } from './auth.model';

export async function getLoggedUser() {
  const url = `/api/auth/me`;

  const { data } = await axios.get<User>(url);
  return data;
}
