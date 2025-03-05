import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionP6Component } from './call-to-action-p6.component';

describe('CallToActionP6Component', () => {
  let component: CallToActionP6Component;
  let fixture: ComponentFixture<CallToActionP6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionP6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionP6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
