import { Component } from '@angular/core';
import { PopularThemeService } from './popular-theme-service/popular-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PopularThemeService,]
})
export class AppComponent {
  title = 'Popular Items';

  constructor(private popularTheme:PopularThemeService){

  }

  popularItems=[];
  private loading: boolean = true;

  removeItem = (itemId) => {
    console.log("remove", itemId);
    
    var index;
    for (var n in this.popularItems){
      if (this.popularItems[n].id == itemId){
        index = n;
      }
    }

    this.popularItems.splice(index, 1);
  }

    ngOnInit() {
      this.loading = true;
      this.popularTheme.fetchPopularItems().subscribe(data => {
        this.loading = false;
        this.popularItems = data.popular.items_last_week;
      })
      ,error =>{
        console.log(error);
      };
    };

}
