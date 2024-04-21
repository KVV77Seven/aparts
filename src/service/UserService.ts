import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/AuthResponse';
import { IUser } from '../models/IUser';

export default class AuthService {
  static async fetchUsers() {
    return $api.get<IUser[]>('/users');
  }
}
