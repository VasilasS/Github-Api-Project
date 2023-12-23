import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users-interface';
import { CurrentUser } from '../models/currentUser-interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://api.github.com/users');
  }

  public getCurrentUser(id: number) {
    return this.http.get<CurrentUser[]>(`https://api.github.com/users/${id}`);
  }

  public getSearchUser(name: string) {
    return this.http.get<any>(`https://api.github.com/search/users?q=${name}`);
  }
}
