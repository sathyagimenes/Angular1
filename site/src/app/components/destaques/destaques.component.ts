import { Component, Input } from '@angular/core';
import { FeaturesSectionData } from 'src/app/models/features-section-data.model';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent {

  @Input() public featureData!: FeaturesSectionData;

}
