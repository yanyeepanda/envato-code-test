import { TestBed, inject } from '@angular/core/testing';

import { PopularThemeService } from './popular-theme.service';
import { HttpModule } from '@angular/http';


describe('PopularThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularThemeService]
    });
  });

  // it('should ...', inject([PopularThemeService], (service: PopularThemeService) => {
  //   expect(service).toBeTruthy();
  // }));
});
