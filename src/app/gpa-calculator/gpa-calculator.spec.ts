import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPACalculator } from './gpa-calculator';

describe('GPACalculator', () => {
  let component: GPACalculator;
  let fixture: ComponentFixture<GPACalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GPACalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GPACalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
