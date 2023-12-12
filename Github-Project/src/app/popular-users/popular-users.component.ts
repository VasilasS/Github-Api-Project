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

  constructor(private usersService: UsersService) {
    this.initializeOutkit();
  }

  ngOnInit() {
    this.initializeOutkit();
  }

  async initializeOutkit() {
    const octokit = new Octokit({
      auth: 'Token',
    });

    try {
      const response = await octokit.request('GET /users');
      this.popularUsers = response.data;
      console.log('Most Popular Users:', this.popularUsers);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
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
