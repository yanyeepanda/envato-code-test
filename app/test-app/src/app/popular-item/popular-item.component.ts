import { Component, OnInit, Input } from '@angular/core';

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
  styleUrls: ['./popular-item.component.css']
})

export class PopularItemComponent implements OnInit {
  test:string;

  constructor() {
    this.test = "item works!";
  }

  @Input() popularItem: PopularItem;

  ngOnInit() {
  }

}
