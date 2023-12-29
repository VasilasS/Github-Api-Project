import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/users-interface';
import { UsersService } from '../shared/services/users.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-popular-users',
  templateUrl: './popular-users.component.html',
  styleUrls: ['./popular-users.component.css'],
})
export class PopularUsersComponent implements OnInit {
  isListView = true;
  popularUsers: User[] = [];

  search = new FormControl(''); 

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.popularUsers = data;
    });
  }

  toggleView(isListView: boolean) {
    this.isListView = isListView;
  }


  searchUsers() {
//ინფუთში რასაც ჩავწერდით search ფორმკონტროლიდან შეგვეძლო ამოძვრენა იმ ინფორმაციის
//ხოდა ამოვიღეთ ამ ფორმ კონტროლიდან მნიშვნელობა და ეხლა უკვე სერვისის მეთოდს ვაწვდით
//ინფუთში ჩაწერილ ტექსტს
    this.usersService.getSearchUser(this.search.value).subscribe((data) => {
      console.log(data)
      this.popularUsers = data.items;
      // this.popularUsers = this.popularUsers.slice(0, 3);
    });
  }
}
