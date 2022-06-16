import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ratings: number[] = [3.2, 3.5, 4.0, 4.75, 4.90, 5.0];

  public onClickStar(n: number) {
    console.log("number: " + n);
  }
}
