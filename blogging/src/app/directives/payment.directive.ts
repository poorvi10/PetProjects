import { Directive, AfterViewInit, Input, Renderer, ElementRef } from '@angular/core';
import { IPaymentList } from '../models/payment';


@Directive({
  selector: '[appPayment]'
})
export class PaymentDirective implements AfterViewInit{
  @Input("appPayment") cartProperty: IPaymentList;

  constructor(private elemRef: ElementRef, private renderer: Renderer) { }
  ngAfterViewInit() {
    this.cartHtml();
  }

  cartHtml() {
    let cartHtml = '';

    for (const cart of this.cartProperty) {
      switch(cart.type) {
        case 'Paytm' : cartHtml += `<button class="btn btn-secondary"> ${cart.text}</button>`;
        break;
        case 'PayU' : cartHtml += `<button class="btn btn-secondary"> ${cart.text}</button>`;
        break;
        case 'Online' : cartHtml += `<button class="btn btn-secondary"> ${cart.text}</button>`
        break;
      }
    }

    this.renderer.setElementProperty(this.elemRef.nativeElement, 'innerHTML', cartHtml);
  }
}
