import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesUrgentesComponent } from './demandes-urgentes.component';

describe('DemandesUrgentesComponent', () => {
  let component: DemandesUrgentesComponent;
  let fixture: ComponentFixture<DemandesUrgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandesUrgentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesUrgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
