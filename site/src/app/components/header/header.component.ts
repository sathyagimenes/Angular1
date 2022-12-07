import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() public elementHeaderCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.elementHeaderCreated.emit('header');
  }

}
