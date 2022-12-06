import { Component } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {


public images: Array<string> = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
