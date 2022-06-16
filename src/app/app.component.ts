import {Component} from '@angular/core';
import {User} from "./app-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: User[] = [
    {
      name: "Javad",
      family: "Shakouri",
      address: "Tehran - area 11",
    }
  ];

  public onAddUser(u: User) {
    this.users.push(u);
  }

  public onDelete(u: User) {
    const index: number = this.users.indexOf(u);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  public onEdit(u: User) {
    this.users.pop();
  }

}
