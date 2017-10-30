import { Component } from '@angular/core';
import { PopularThemeService } from './popular-theme-service/popular-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PopularThemeService]
})
export class AppComponent {
  title = 'Popular Items';
  popularItems:any;
  private loading: boolean = true;

  constructor(private popularTheme:PopularThemeService){
  }

  ngOnInit() {
    this.loading = true;
    this.fetchItems();
  };

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

  fetchItems = () => {
    this.popularTheme.fetchPopularItems().subscribe(data => {
      this.loading = false;
      this.popularItems = data.popular.items_last_week;
      for (var i in this.popularItems){
        if (this.popularItems[i].item.length > 50){
          var tempItemName = this.popularItems[i].item.substr(0,50) + "...";
          this.popularItems[i].item = tempItemName;
        } 
      }
    })
    ,error =>{
      console.log(error);
    };
  }

}
