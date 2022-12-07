import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressSectionData } from 'src/app/models/address-section-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  @Input() public addressData!: AddressSectionData;
  @Output() public elementAddressCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.elementAddressCreated.emit('address')
  }
}
