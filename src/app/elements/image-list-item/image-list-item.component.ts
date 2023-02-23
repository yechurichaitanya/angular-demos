import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.css'],
})
export class ImageListItemComponent {
  @Input() providerPhoto: string = '../../../assets/Images/doctor-294.png';
}
