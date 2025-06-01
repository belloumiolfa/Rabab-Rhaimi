import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersPatientsComponent } from './dossiers-patients.component';

describe('DossiersPatientsComponent', () => {
  let component: DossiersPatientsComponent;
  let fixture: ComponentFixture<DossiersPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DossiersPatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossiersPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
