import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PopularItemComponent } from './popular-item/popular-item.component';
import { PopularThemeService } from 'app/popular-theme-service/popular-theme.service';

@NgModule({
  declarations: [
    AppComponent,
    PopularItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PopularThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
