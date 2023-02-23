import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set renderElement(times: number) {
    this.viewContainerRef.clear();

    for (let index = 0; index < times; index++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        index: index,
      });
    }
  }
}
