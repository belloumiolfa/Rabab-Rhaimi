import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionP5Component } from './call-to-action-p5.component';

describe('CallToActionP5Component', () => {
  let component: CallToActionP5Component;
  let fixture: ComponentFixture<CallToActionP5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionP5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionP5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
