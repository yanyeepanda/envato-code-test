import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// import { PopItem } from './popular-item';

@Component({
  selector: 'popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.scss']
})

export class PopularItemComponent implements OnInit {

  @Input() public popularItem: any;
  @Output() removeClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  remove(event, itemId){
    this.removeClick.emit(itemId);
  }

}
