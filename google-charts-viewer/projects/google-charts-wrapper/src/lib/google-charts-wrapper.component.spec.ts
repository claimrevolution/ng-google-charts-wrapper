import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleChartsWrapperComponent } from './google-charts-wrapper.component';

describe('GoogleChartsWrapperComponent', () => {
  let component: GoogleChartsWrapperComponent;
  let fixture: ComponentFixture<GoogleChartsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleChartsWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleChartsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
