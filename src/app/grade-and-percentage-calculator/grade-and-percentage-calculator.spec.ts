import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeAndPercentageCalculator } from './grade-and-percentage-calculator';

describe('GradeAndPercentageCalculator', () => {
  let component: GradeAndPercentageCalculator;
  let fixture: ComponentFixture<GradeAndPercentageCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeAndPercentageCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeAndPercentageCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
