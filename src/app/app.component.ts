import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isCurrent: boolean = true;

  styles = {};
  classes = {};

  ngOnInit(): void {
    this.styles = {
      'font-size': this.isCurrent ? '4rem' : '2rem',
      'color': 'red'
    };

    this.classes = {
      'big-font-size': this.isCurrent,
      'cancel-color': this.isCurrent
    };

  }

  public onClick(e: Event){
    this.isCurrent = !this.isCurrent;
    this.classes = {
      'big-font-size': this.isCurrent,
      'cancel-color': this.isCurrent
    };
  }

}
