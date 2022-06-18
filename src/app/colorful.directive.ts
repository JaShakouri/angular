import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

  availableColor = ['#20695A', '#34a891', '#40cfb2', '#48e8c8', '#4CF5D3'];

  //i want bind to my host or my element
  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keydown') newColor() {
    const randomColorIndex = Math.floor(Math.random() * this.availableColor.length);
    this.color = this.borderColor = this.availableColor[randomColorIndex];
  }

}
