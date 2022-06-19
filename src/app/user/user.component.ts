import {Component, OnInit} from '@angular/core';
import {User} from "../../data/model/User";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  selectedId = 0;
  selectedUser: User | undefined;
  userNotFound = false;

  user: User[] = [
    {
      id: 1,
      name: "Javad Shakouri"
    },

    {
      id: 2,
      name: "Mehran Shakouri"
    },

    {
      id: 3,
      name: "Reza Shakouri"
    },

  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.onCheckRouteParams();
  }

  ngOnChanges() {
    console.log("change");
  }

  public onCheckRouteParams() {
    this.route.params.subscribe((param: Params) => {
      this.selectedId = +param['id'];
      this.selectedUser = this.user.find(user => user.id === this.selectedId);
      this.userNotFound = !this.selectedUser;
    });
  }

}
