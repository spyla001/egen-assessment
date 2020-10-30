import { Injectable } from '@angular/core';
const USER_DATA_KEY = 'user';

export interface UserData {
  userId: string;
  password: string;
};
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // Token data

  // User data
  get user(): UserData {
    const stringData = localStorage.getItem(USER_DATA_KEY);
    return stringData ? JSON.parse(stringData) : null;
  }
  set user(user: UserData) {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
  }

  // Clear Localstorage Keys
  clear() {
    localStorage.removeItem(USER_DATA_KEY);
  }
}
