import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionTeamComponent } from './call-to-action-team.component';

describe('CallToActionTeamComponent', () => {
  let component: CallToActionTeamComponent;
  let fixture: ComponentFixture<CallToActionTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
