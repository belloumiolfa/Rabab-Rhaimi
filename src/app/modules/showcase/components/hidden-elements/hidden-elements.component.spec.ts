import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenElementsComponent } from './hidden-elements.component';

describe('HiddenElementsComponent', () => {
  let component: HiddenElementsComponent;
  let fixture: ComponentFixture<HiddenElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
