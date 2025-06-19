import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryStatsComponent } from './secretary-stats.component';

describe('SecretaryStatsComponent', () => {
  let component: SecretaryStatsComponent;
  let fixture: ComponentFixture<SecretaryStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaryStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
