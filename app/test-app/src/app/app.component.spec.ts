import { TestBed, ComponentFixture, fakeAsync, async, tick } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PopularItemComponent } from './popular-item/popular-item.component';
import { PopularThemeService } from './popular-theme-service/popular-theme.service';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

describe('AppComponent', () => {
  // let fixture: ComponentFixture<AppComponent>;
  let popularThemeService:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [PopularThemeService],
      imports: [HttpModule],
      declarations: [
        AppComponent,
        PopularItemComponent
      ],
    }).compileComponents();

    popularThemeService = TestBed.get(PopularThemeService);

    spyOn(popularThemeService, 'fetchPopularItems').and.returnValue(Observable.of({
      "popular": {
        "items_last_week": [
            {
                "id": "2833226",
                "item": "Avada | Responsive Multi-Purpose Theme",
                "url": "https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226",
                "user": "ThemeFusion",
                "thumbnail": "https://s3.envato.com/files/231552299/Thumbnail.jpg",
                "sales": "1642",
                "rating": "5.0",
                "rating_decimal": "4.77",
                "cost": "60.00",
                "uploaded_on": "Thu Aug 16 01:28:46 +1000 2012",
                "last_update": "Tue Aug 08 03:42:36 +1000 2017",
                "tags": "blog, business, clean, corporate, creative, ecommerce, modern, multipurpose, one page, photography, portfolio, responsive, retina, woocommerce, wordpress",
                "category": "wordpress/corporate",
                "live_preview_url": "https://s3.envato.com/files/231552300/screenshots/00_preview.__large_preview.jpg"
            },
            {
                "id": "5556590",
                "item": "The7 — Responsive Multi-Purpose WordPress Theme",
                "url": "https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590",
                "user": "Dream-Theme",
                "thumbnail": "https://s3.envato.com/files/224461316/icon.png",
                "sales": "1058",
                "rating": "5.0",
                "rating_decimal": "4.77",
                "cost": "39.00",
                "uploaded_on": "Wed Sep 11 09:58:20 +1000 2013",
                "last_update": "Fri Oct 13 01:32:04 +1100 2017",
                "tags": "business, corporate, creative, custom layout, customizable, fluid, ios, mobile, parallax stripes, photography, portfolio, seo, striped backgrounds, ultimate addons, visual composer",
                "category": "wordpress/corporate",
                "live_preview_url": "https://s3.envato.com/files/234629440/new-image-tf.__large_preview.png"
            }
          ]
        }
    }));
    
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Popular Items'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Popular Items');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Popular Items');
  }));

  it(`should the fetchPopularItems from popular theme service should be called`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // spyOn(popularThemeService, 'fetchPopularItems').and.callThrough();
    fixture.detectChanges();
    expect(popularThemeService.fetchPopularItems).toHaveBeenCalled();
  });

  it(`should get the popular items list inintialized`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    expect(app.popularItems[0].id).toEqual('2833226');
  });

  it(`removeItem() should remove item according from list to item id`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    fixture.detectChanges();
    app.removeItem('2833226');
    expect(app.popularItems.length).toEqual(1);
    expect(app.popularItems[0].id).toEqual('5556590');
  });


});