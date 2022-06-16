import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../app-interface";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users!: User[];

  @Output() onDelete = new EventEmitter<User>();
  @Output() onEdit = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onCallDelete(u: User) {
    this.onDelete.emit(u);
  }

  public onCallEdit(u: User) {
    this.onEdit.emit(u);
  }

}
