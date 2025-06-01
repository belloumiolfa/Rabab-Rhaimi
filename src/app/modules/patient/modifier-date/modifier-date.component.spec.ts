import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDateComponent } from './modifier-date.component';

describe('ModifierDateComponent', () => {
  let component: ModifierDateComponent;
  let fixture: ComponentFixture<ModifierDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
