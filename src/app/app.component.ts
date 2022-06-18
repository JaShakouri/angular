import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  // @ViewChild('varInput', {static: true}) varInput!: ElementRef;

  varInput: any;

  constructor() {

  }

  changeContent() {
    this.varInput.nativeElement.textContent = "text test";
  }
}
