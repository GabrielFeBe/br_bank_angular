import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthStatementComponent } from './month-statement.component';

describe('MonthStatementComponent', () => {
  let component: MonthStatementComponent;
  let fixture: ComponentFixture<MonthStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
