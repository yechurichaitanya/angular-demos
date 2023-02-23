import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set renderElement(times: number) {
    this.viewContainer.clear();
    for (let index = 0; index < times; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: index,
      });
    }
  }
}
