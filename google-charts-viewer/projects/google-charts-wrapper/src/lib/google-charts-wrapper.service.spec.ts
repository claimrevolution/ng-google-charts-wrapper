import { TestBed } from '@angular/core/testing';

import { GoogleChartsWrapperService } from './google-charts-wrapper.service';

describe('GoogleChartsWrapperService', () => {
  let service: GoogleChartsWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleChartsWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
