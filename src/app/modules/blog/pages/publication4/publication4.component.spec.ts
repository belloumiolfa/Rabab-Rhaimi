import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publication4Component } from './publication4.component';

describe('Publication4Component', () => {
  let component: Publication4Component;
  let fixture: ComponentFixture<Publication4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publication4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publication4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
