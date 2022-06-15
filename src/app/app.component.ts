import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = '';
  password = '';
  rePassword = '';
  isMatchPassword = false;

  public onUserNameInputChanged(e: Event) {
    this.username = (<HTMLInputElement> e.target).value;
  }

  public onPasswordInputChanged(e: Event) {
    this.password = (<HTMLInputElement> e.target).value;
  }

  public onRePasswordInputChanged(e: Event) {
    this.rePassword = (<HTMLInputElement> e.target).value;
    this.isMatchPassword = this.rePassword !== this.password ? false : true;
  }

}
