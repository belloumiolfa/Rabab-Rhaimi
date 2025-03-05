import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionP2Component } from './call-to-action-p2.component';

describe('CallToActionP2Component', () => {
  let component: CallToActionP2Component;
  let fixture: ComponentFixture<CallToActionP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionP2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
