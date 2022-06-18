import {
  Component,
  Input, OnChanges,
  OnInit, SimpleChanges
} from '@angular/core';
import {User} from "../../data/model/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges {

  private _user!: User;

  @Input("user")
  set user(user: User) {
    this._user = user;
    this.counter++;
  }

  get user(): User {
    return this._user;
  }

  counter: number = 0;

  ngOnInit(): void {
    console.log(this._user);
  }

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("user: " + this._user);
    console.log("counter: " + this.counter);
  }

}
