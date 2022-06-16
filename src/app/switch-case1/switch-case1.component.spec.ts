import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCase1Component } from './switch-case1.component';

describe('SwitchCase1Component', () => {
  let component: SwitchCase1Component;
  let fixture: ComponentFixture<SwitchCase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCase1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
