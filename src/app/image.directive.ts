import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImage]',
})
export class ImageDirective {
  constructor(private element: ElementRef) {}

  @Input('backgroundImage') set backgroundImage(value: string) {
    this.element.nativeElement.src = value;
  }
}
