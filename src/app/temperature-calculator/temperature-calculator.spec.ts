import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureCalculator } from './temperature-calculator';

describe('TemperatureCalculator', () => {
  let component: TemperatureCalculator;
  let fixture: ComponentFixture<TemperatureCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
