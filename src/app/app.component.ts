import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit, QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {IncComponent} from "./inc/inc.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild("par", {static: true, read: ElementRef}) par!: ElementRef;
  @ViewChild(IncComponent, {static: true, read: IncComponent}) incComp!: IncComponent;
  @ViewChildren(IncComponent ,{read: IncComponent}) incComps!: QueryList<IncComponent>;

  constructor(private render: Renderer2) {

  }

  ngOnInit(): void {

    this.incComp.increment();
    this.incComp.increment();

    this.par.nativeElement.textContent = "Hello World";
    this.render.setStyle(this.par.nativeElement, 'color', 'purple')
  }

  ngAfterViewInit(): void {

    this.incComps.forEach(inc => {
      inc.increment();
      inc.increment();
      inc.increment();
    });

  }

  public onClick(e: String) {
    alert(e);
  }

}
