import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationTableCalculator } from './multiplication-table-calculator';

describe('MultiplicationTableCalculator', () => {
  let component: MultiplicationTableCalculator;
  let fixture: ComponentFixture<MultiplicationTableCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplicationTableCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicationTableCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
