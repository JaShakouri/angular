import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ICarouselContext} from "./interfaces/app-interface";
// @ts-ignore
import Timeout = NodeJS.Timeout;

@Directive({
  selector: '[Carousel]'
})
export class CarouselDirective implements OnInit {

  @Input('CarouselOf') images: string[] = [];
  index: number = 0;

  context: ICarouselContext | null = null;

  constructor(private templateRef: TemplateRef<ICarouselContext>,
              private viewContainerRef: ViewContainerRef) {
  }

  timer: Timeout;
  _interval: number = 1000;

  @Input('CarouselInterval')
  set interval(val: number) {
    this._interval = val;
    this.stopTimer();
    this.startTimer();
  }

  @Input('CarouselAutoPlay')
  set autoPlay(val: boolean) {
    val ? this.startTimer() : this.stopTimer();
  }

  ngOnInit(): void {
    this._setNewContext();
    this.viewContainerRef
      .createEmbeddedView(this.templateRef, this.context);
  }

  public next() {
    this.index++;

    if (this.index >= this.images.length) {
      this.index = 0;
    }

    this.context!.$implicit = this.images[this.index];
  }

  public previous() {
    this.index--;

    if (this.index < 0)
      this.index = this.images.length - 1;

    this.context!.$implicit = this.images[this.index];
  }

  private _setNewContext() {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        previous: () => this.previous()
      }
    }
  }

  public startTimer() {
    this.timer = setInterval(() => {
      this.next();
    }, this._interval);
  }

  public stopTimer() {
    clearInterval(this.timer);
  }
}
