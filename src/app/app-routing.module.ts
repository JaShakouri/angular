import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminsComponent} from "./admins/admins.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'admin', component: AdminsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
