import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @Input() Highlight: string = "transparent";

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.Highlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('transparent');
  }

  private changeBackgroundColor(color: string) {
    // this is a bad way for change element style
    // this.elementRef.nativeElement.style.backgroundColor = color;
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }

}
