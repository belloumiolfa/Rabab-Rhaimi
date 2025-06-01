import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publication3Component } from './publication3.component';

describe('Publication3Component', () => {
  let component: Publication3Component;
  let fixture: ComponentFixture<Publication3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publication3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publication3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
