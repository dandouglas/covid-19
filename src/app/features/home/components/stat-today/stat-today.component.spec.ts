import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTodayComponent } from './stat-today.component';

describe('StatTodayComponent', () => {
  let component: StatTodayComponent;
  let fixture: ComponentFixture<StatTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
