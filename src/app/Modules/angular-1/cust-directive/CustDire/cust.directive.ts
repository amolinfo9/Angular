import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCust]'
})
export class CustDirective {

  constructor(private ele:ElementRef) {

      this.ele.nativeElement.style.color = 'red'
  }

}
