import { Component, OnInit } from '@angular/core';
import { Octokit } from '@octokit/rest';
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

  columns = [
    { title: 'Column 1', text: 'Some text..', bgColor: '#aaa' },
    { title: 'Column 2', text: 'Some text..', bgColor: '#bbb' },
    { title: 'Column 1', text: 'Some text..', bgColor: '#aaa' },
    { title: 'Column 2', text: 'Some text..', bgColor: '#bbb' },
  ];

  toggleView(isListView: boolean) {
    this.isListView = isListView;
  }
}
