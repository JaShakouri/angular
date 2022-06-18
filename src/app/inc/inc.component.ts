import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styleUrls: ['./inc.component.scss']
})
export class IncComponent implements OnInit {

  private _add: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  get add(): number {
    return this._add;
  }

  public increment(){
    this._add++;
  }

  public decrement(){
    this._add--;
  }

}
