import { Component, OnInit, Input } from '@angular/core';

//should create a class for items?

@Component({
  selector: 'popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.css']
})

export class PopularItemComponent implements OnInit {
  test:string;

  constructor() {
    this.test = "item works!"
   }

  ngOnInit() {
  }

}
