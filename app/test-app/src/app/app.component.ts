import { Component } from '@angular/core';
import { PopularThemeService } from './popular-theme-service/popular-theme.service';
import { PopularItemComponent } from './popular-item/popular-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PopularThemeService, PopularItemComponent]
})
export class AppComponent {
  title = 'Popular Items';

  constructor(private popularTheme:PopularThemeService){

  }
  someProperty:string = '';
  popularItems={};
  private loading: boolean = true;
  
    ngOnInit() {
      // console.log(this.popularTheme.cars);
  
      this.someProperty = this.popularTheme.myData();

      this.loading = true;
      this.popularTheme.fetchPopularItems().subscribe(data => {
        this.loading = false;
        this.popularItems = data.popular.items_last_week;
        console.log(data.popular.items_last_week);
      });
      // console.log(this.popularTheme.fetchPopularItems());
    }
}
