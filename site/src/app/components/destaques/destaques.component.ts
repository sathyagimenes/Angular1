import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FeaturesSectionData } from 'src/app/models/features-section-data.model';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent {
  @Output() public elementFeaturesCreated: EventEmitter<string> = new EventEmitter<string>();
  @Input() public featureData!: FeaturesSectionData;

  ngOnInit() {
    this.elementFeaturesCreated.emit('features');
  }

}
