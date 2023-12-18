import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { CurrentUser } from '../shared/models/currentUser-interface';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrl: './current-user.component.css',
})
export class CurrentUserComponent implements OnInit {
  currentUser: CurrentUser[] = [];

  constructor(private currentUserService: UsersService) {}

  ngOnInit(): void {
    this.loadUser;
  }

  loadUser(id: number): void {
    this.currentUserService.getCurrentUser(id).subscribe((data) => {
      this.currentUser = data;
    });
  }
}
