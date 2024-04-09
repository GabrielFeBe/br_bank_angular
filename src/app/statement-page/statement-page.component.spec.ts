import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementPageComponent } from './statement-page.component';

describe('StatementPageComponent', () => {
  let component: StatementPageComponent;
  let fixture: ComponentFixture<StatementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatementPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
