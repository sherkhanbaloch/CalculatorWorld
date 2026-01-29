import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgpaCalculator } from './cgpa-calculator';

describe('CgpaCalculator', () => {
  let component: CgpaCalculator;
  let fixture: ComponentFixture<CgpaCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgpaCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CgpaCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
