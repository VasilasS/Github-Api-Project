import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users-interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private url = 'https://api.github.com/users';

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
