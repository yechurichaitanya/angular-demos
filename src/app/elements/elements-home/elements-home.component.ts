import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css'],
})
export class ElementsHomeComponent implements OnInit {
  providerPhoto!: string;

  ngOnInit(): void {
    var photo =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/HumanRightsLogo.svg/230px-HumanRightsLogo.svg.png';

    if (!photo) {
      this.providerPhoto = '../../../assets/Images/doctor-294.png';
    } else {
      this.providerPhoto = photo;
    }
  }
}
