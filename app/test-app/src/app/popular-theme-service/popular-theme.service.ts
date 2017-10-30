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

  fetchPopularItems() {    
    return this.http.get(this.popThemeUrl)
    .map(
      res => res.json()
    );
  }

}
