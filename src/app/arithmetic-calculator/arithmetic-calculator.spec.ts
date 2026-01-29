import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticCalculator } from './arithmetic-calculator';

describe('ArithmeticCalculator', () => {
  let component: ArithmeticCalculator;
  let fixture: ComponentFixture<ArithmeticCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArithmeticCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArithmeticCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
