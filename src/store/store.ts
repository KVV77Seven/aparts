import { API_URL } from './../http/index';
import { makeAutoObservable } from 'mobx';
import { IUser } from '../models/IUser';
import AuthService from '../service/AuthService';
import axios from 'axios';
import { AuthResponse } from '../models/AuthResponse';

export default class Store {
  user = {} as IUser;
  isAuth = false;
  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  setUser(user: IUser) {
    this.user = user;
  }
  setError(error: string) {
    this.error = error;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response.data);

      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
      this.setError(e.response?.data?.message);
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
      this.setError(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      console.log('logout succ');

      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
      console.log(this.isAuth);
    } catch (e: any) {
      console.log('catch');

      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log(response);

      if (!response) {
        return;
      }
      console.log(response.data);

      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {}
  }
}
