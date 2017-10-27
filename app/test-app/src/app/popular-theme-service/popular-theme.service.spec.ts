import { TestBed, inject } from '@angular/core/testing';

import { PopularThemeService } from './popular-theme.service';

describe('PopularThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularThemeService]
    });
  });

  it('should ...', inject([PopularThemeService], (service: PopularThemeService) => {
    expect(service).toBeTruthy();
  }));
});
