import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
})
export class HighlightDirectiveDirective {
  constructor(private eleRef: ElementRef) {}


  @HostListener('mouseover') 
  onMouseOver(){
    this.eleRef.nativeElement.style.color ='red'
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.eleRef.nativeElement.style.color ='gray'
  }
}
