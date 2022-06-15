import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  name = '';
  isEnable: Boolean = false;

  public onInputChanged(e: Event) {
    this.title = (<HTMLInputElement> e.target).value;
  }

}
