import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  color: string = 'red';

  images: string[] = [
    '/domain/assets/01.svg',
    '/domain/assets/02.svg',
    '/domain/assets/03.svg',
    '/domain/assets/04.svg'
  ];

  constructor() {

  }

}
