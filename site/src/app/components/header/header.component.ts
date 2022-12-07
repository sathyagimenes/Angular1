import { Component, Output, EventEmitter } from '@angular/core';
import { SearchData } from 'src/app/models/search-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() public elementHeaderCreated: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sendSearch: EventEmitter<SearchData> = new EventEmitter<SearchData>();

  ngOnInit() {
    this.elementHeaderCreated.emit('header');
  }

  public searchedWord(): void {
    this.sendSearch.emit(this.searchData);
  }

  public searchData: SearchData = {
    search: "Search"
  }

}
