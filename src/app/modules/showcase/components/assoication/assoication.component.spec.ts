import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssoicationComponent } from './assoication.component';

describe('AssoicationComponent', () => {
  let component: AssoicationComponent;
  let fixture: ComponentFixture<AssoicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssoicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssoicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
