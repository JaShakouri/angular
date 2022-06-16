import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../app-interface";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Output() addUser = new EventEmitter<User>();
  @Output() editUser = new EventEmitter<User>();

  @Input() giveEditUser = new EventEmitter<User>();

  isEdit = false;

  id: number = -1;
  name: string = '';
  family: string = '';
  address: string = '';

  constructor() {

  }

  ngOnChanges(): void {
    this.giveEditUser.subscribe(user => {
      if (user !== null) {
        this.isEdit = true;
        this.id = user.id;
        this.name = user.name;
        this.family = user.family;
        this.address = user.address;
      }
    });
  }

  ngOnInit(): void {
  }

  public onAddUser(e: Event) {
    e.preventDefault();
    if (this.isEdit) {
      this.editUser.emit({
        id: this.id,
        name: this.name,
        family: this.family,
        address: this.address
      });
    } else {
      this.addUser.emit({
        id: this.randomNumber(99,9999),
        name: this.name,
        family: this.family,
        address: this.address
      });
    }
    this.id = -1;
    this.name = '';
    this.family = '';
    this.address = '';
    this.isEdit = false;
  }

  randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

}

