import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// import { PopItem } from './popular-item';

//should create a class for items?

class PopularItem {
  id: string;
  item: string;
  url: string;
  user: string;
  thumbnail: string;
  sales: string;
  rating: string;
  rating_decimal: string;
  cost: string;
  uploaded_on: string;
  last_update: string;
  tags: string;
  category: string;
  live_preview_url: string;
}

@Component({
  selector: 'popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.scss']
})

export class PopularItemComponent implements OnInit {

  @Input() public popularItem: PopularItem;
  @Output() removeClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  remove(event, itemId){
    this.removeClick.emit(itemId);
  }

}
