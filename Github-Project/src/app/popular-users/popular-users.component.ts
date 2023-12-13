import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/users-interface';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-popular-users',
  templateUrl: './popular-users.component.html',
  styleUrls: ['./popular-users.component.css'],
})
export class PopularUsersComponent implements OnInit {
  isListView = true;
  popularUsers: User[] = [];

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
}
