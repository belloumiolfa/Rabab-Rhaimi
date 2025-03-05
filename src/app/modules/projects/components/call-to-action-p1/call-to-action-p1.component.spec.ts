import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionP1Component } from './call-to-action-p1.component';

describe('CallToActionP1Component', () => {
  let component: CallToActionP1Component;
  let fixture: ComponentFixture<CallToActionP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionP1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
