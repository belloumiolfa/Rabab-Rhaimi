import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationRdvComponent } from './confirmation-rdv.component';

describe('ConfirmationRdvComponent', () => {
  let component: ConfirmationRdvComponent;
  let fixture: ComponentFixture<ConfirmationRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationRdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
