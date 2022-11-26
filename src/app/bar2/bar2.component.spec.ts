import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar2Component } from './bar2.component';

describe('Bar2Component', () => {
  let component: Bar2Component;
  let fixture: ComponentFixture<Bar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
