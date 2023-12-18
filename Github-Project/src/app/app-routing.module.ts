import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentUserComponent } from './current-user/current-user.component';
import { PopularUsersComponent } from './popular-users/popular-users.component';

const routes: Routes = [
  { path: 'users', component: PopularUsersComponent },
  { path: 'users/:id', component: CurrentUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
