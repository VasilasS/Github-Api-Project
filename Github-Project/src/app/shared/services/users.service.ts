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

  
  public getCurrentUser(login: string) {
    console.log(login);
    return this.http.get<CurrentUser>(`https://api.github.com/users/${login}`);
  }


  public getSearchUser(name: string) {
    //აი აქ, name- რომ წერია მოვა ის ინფუთში ჩაწერილი ტექსტი 
    return this.http.get<any>(`https://api.github.com/search/users?q=${name}`);
  }
}
