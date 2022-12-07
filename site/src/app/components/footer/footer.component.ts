import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() public elementFooterCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.elementFooterCreated.emit('footer');
  }

}
