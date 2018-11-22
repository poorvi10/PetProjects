import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]' // name to attach with element
})
export class HoverDirective {
  @Input('appHover') bg;
  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseover') mouseOver () {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', this.bg);
  }
  @HostListener('mouseout')  mouseOut () {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'transparent');
  }
}
