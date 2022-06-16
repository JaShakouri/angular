import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input('starRating') rating: number = 4.5;
  @Output('starEventEmitter') clicked = new EventEmitter<number>();
  width: number = 90;

  constructor() {
  }

  ngOnInit(): void {
    this.width = this.rating * 90 / 5;
  }

  public onClick() {
    this.clicked.emit(this.rating);
  }

}
