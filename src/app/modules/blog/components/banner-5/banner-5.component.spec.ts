import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner5Component } from './banner-5.component';

describe('Banner5Component', () => {
  let component: Banner5Component;
  let fixture: ComponentFixture<Banner5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banner5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Banner5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
