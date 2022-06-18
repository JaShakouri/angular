import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild, DoCheck,
  ElementRef, Input, OnDestroy, OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ContentChild('par', {static: true, read: ElementRef}) par!: ElementRef;
  @ViewChild('par2', {static: true}) par2!: ElementRef;
  @Input() varInput!: any;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges: "+this.varInput);
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked: " + this.par.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked: " + this.par2.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  OnChangeViewChild() {
    this.par2.nativeElement.textContent = "View Child changed!!!";
  }
}
