import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionP4Component } from './call-to-action-p4.component';

describe('CallToActionP4Component', () => {
  let component: CallToActionP4Component;
  let fixture: ComponentFixture<CallToActionP4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionP4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
