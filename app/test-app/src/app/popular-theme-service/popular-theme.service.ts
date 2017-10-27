import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class PopularThemeService {

  private popularItems: Observable<any>;

  constructor(private http: Http ) { 
  }

  popThemeUrl = 'http://marketplace.envato.com/api/edge/popular:themeforest.json';

  // cars = [
  //   'Ford','Chevrolet','Buick'
  // ];


  myData() {
    return 'This is my data!';
  }

  fetchPopularItems() {
    console.log(this.popThemeUrl);
    
    this.popularItems = this.http.get(this.popThemeUrl).map(
      res => res.json()
    );

    return this.popularItems;
  }

}
