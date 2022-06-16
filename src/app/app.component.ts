import {Component, EventEmitter} from '@angular/core';
import {User} from "./app-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  editUser = new EventEmitter<User>();

  users: User[] = [];

  public onAddUser(u: User) {
    this.users.push(u);
  }

  public onEditUser(u: User) {
    let index: number = -1;

    this.users.forEach(user => {
      if (user.id == u.id)
        index = this.users.indexOf(user);
    });

    console.log("editing user " + index);
    if (index !== -1) {
      this.users[index] = u;
    }
  }

  public onDelete(u: User) {
    const index: number = this.users.indexOf(u);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  public onEdit(u: User) {
    this.editUser.emit(u);
  }

}
