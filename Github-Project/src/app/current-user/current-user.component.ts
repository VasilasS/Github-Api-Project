import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { CurrentUser } from '../shared/models/currentUser-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrl: './current-user.component.css',
})
export class CurrentUserComponent implements OnInit {
  // currentUser: CurrentUser[] = [];
  currentUser: CurrentUser;

  constructor(
    private currentUserService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const login = params['login'];
      console.log('params ', login);
      this.loadUser(login);
    });
  }

  loadUser(login: string): void {
    console.log(login);
    this.currentUserService.getCurrentUser(login).subscribe((data) => {
      this.currentUser = data;
    });
  }
}
