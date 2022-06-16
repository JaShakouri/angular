import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCase3Component } from './switch-case3.component';

describe('SwitchCase3Component', () => {
  let component: SwitchCase3Component;
  let fixture: ComponentFixture<SwitchCase3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCase3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
