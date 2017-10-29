import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PopularItemComponent } from './popular-item/popular-item.component';
import { PopularThemeService } from './popular-theme-service/popular-theme.service';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [PopularThemeService],
      imports: [HttpModule],
      declarations: [
        AppComponent,
        PopularItemComponent
      ],
    }).compileComponents();
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
});
