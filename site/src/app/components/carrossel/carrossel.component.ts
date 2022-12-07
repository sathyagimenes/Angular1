import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {
@Output() public elementCarouselCreated: EventEmitter<string> = new EventEmitter<string>();

ngOnInit() {
  this.elementCarouselCreated.emit('carousel');
}

public images: Array<string> = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
