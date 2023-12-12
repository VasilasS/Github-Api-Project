import { Component } from '@angular/core';
import { Octokit } from '@octokit/rest';

@Component({
  selector: 'app-popular-users',
  templateUrl: './popular-users.component.html',
  styleUrls: ['./popular-users.component.css'],
})
export class PopularUsersComponent {
  isListView = true;

  constructor() {
    this.initializeOutkit();
  }

  async initializeOutkit() {
    const octokit = new Octokit({
      auth: 'Token',
    });

    try {
      const response = await octokit.request('GET /user', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
      console.log('User data', response.data);
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
