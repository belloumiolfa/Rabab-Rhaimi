import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrendreRdvWrapperComponent } from './prendre-rdv-wrapper.component';

describe('PrendreRdvWrapperComponent', () => {
  let component: PrendreRdvWrapperComponent;
  let fixture: ComponentFixture<PrendreRdvWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrendreRdvWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrendreRdvWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
