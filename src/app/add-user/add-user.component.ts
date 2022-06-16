import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../app-interface";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Output() addUser = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onAddUser(name: string, family: string, address: string, e: Event) {
    e.preventDefault();
    let u: User = {
      name: name,
      family: family,
      address: address,
    };
    this.addUser.emit(u);
  }

}
