import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionP3Component } from './call-to-action-p3.component';

describe('CallToActionP3Component', () => {
  let component: CallToActionP3Component;
  let fixture: ComponentFixture<CallToActionP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionP3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
