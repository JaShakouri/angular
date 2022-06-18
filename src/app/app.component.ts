import {
  Component
} from '@angular/core';
import {User} from "../data/model/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: User = {
    name: "Javad",
    family: "Shakouri",
    address: "Tehran area 11",
    age: 28
  }

  users: User[] = [

    {
      name: "Javad",
      family: "Shakouri",
      address: "Tehran area 11",
      age: 28
    },

    {
      name: "Mehran",
      family: "Shakouri",
      address: "Mazandaran ramsar",
      age: 24
    },

    {
      name: "Reza",
      family: "Shakouri",
      address: "Gilan shaft shalma",
      age: 54
    }

  ];

  constructor() {

  }

  onChangeSelect(user: Event){
    console.log(user);
  }
}
