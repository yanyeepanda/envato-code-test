import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PopularItemComponent } from './popular-item/popular-item.component';

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
  exports: [
    PopularItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
