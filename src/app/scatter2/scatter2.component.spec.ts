import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scatter2Component } from './scatter2.component';

describe('Scatter2Component', () => {
  let component: Scatter2Component;
  let fixture: ComponentFixture<Scatter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scatter2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scatter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
