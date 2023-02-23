import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';
import { ImageListItemComponent } from './image-list-item/image-list-item.component';

@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    TimesDirective,
    ImageListItemComponent,
  ],
  imports: [CommonModule, SharedModule, ElementsRoutingModule],
  exports: [],
})
export class ElementsModule {}
