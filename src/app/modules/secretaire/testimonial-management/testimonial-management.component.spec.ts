import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialManagementComponent } from './testimonial-management.component';

describe('TestimonialManagementComponent', () => {
  let component: TestimonialManagementComponent;
  let fixture: ComponentFixture<TestimonialManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
