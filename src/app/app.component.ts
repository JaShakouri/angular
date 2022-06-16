import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isCurrent: boolean = true;
  users: string[] = ["Javad", "Shaahin", "Salar", "Reza", "Asal", "Mehran"];
  usersObj: Array<any> = [
    {
      id: 1659,
      name: "Javad",
      family: "Shakouri",
      age: 28
    },

    {
      id: 5987,
      name: "Mehran",
      family: "Shakouri",
      age: 24
    },

    {
      id: 5680,
      name: "Nima",
      family: "Shakouri",
      age: 29
    },

    {
      id: 6973,
      name: "Reza",
      family: "Shakouri",
      age: 54
    },

    {
      id: 6903,
      name: "Hamid",
      family: "Shakouri",
      age: 78
    },
  ];

  switchProperty = "a";

  public onClick(e: Event) {
    this.isCurrent = !this.isCurrent;
  }

  public onAddUser(e: Event) {
    let id = Math.floor((Math.random() * 9999) + 1000);
    let age = Math.floor((Math.random() * 99) + 10);
    let user = {
      id: id,
      name: "Name " + id,
      family: "Family " + id,
      age: age
    };

    this.usersObj.push(user);
  }

  public onRemoveUser(e: Event) {
    this.usersObj.pop();
  }

  public trackByFunction(index: number, element: any) {
    return element.id;
  }

  public SwitchCaseA(e: Event) {
    this.switchProperty = "a";
  }

  public SwitchCaseB(e: Event) {
    this.switchProperty = "b";
  }

  public SwitchCaseC(e: Event) {
    this.switchProperty = "c";
  }
}
