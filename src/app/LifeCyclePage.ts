import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from "@angular/core";

export abstract class LifeCyclePage implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  protected constructor() {
  }

  //01
  abstract ngOnChanges(changes: SimpleChanges): void;

  //02
  abstract ngOnInit(): void;

  //03
  abstract ngDoCheck(): void;

  //04
  abstract ngAfterContentInit(): void;

  //05
  abstract ngAfterContentChecked(): void;

  //06
  abstract ngAfterViewInit(): void;

  //07
  abstract ngAfterViewChecked(): void;

  //08
  abstract ngOnDestroy(): void;

}
