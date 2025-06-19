import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmUrgenceComponent } from './confirm-urgence.component';

describe('ConfirmUrgenceComponent', () => {
  let component: ConfirmUrgenceComponent;
  let fixture: ComponentFixture<ConfirmUrgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmUrgenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmUrgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
