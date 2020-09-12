import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTableComponent } from './stat-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('StatTableComponent', () => {
  let component: StatTableComponent;
  let fixture: ComponentFixture<StatTableComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatTableComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
