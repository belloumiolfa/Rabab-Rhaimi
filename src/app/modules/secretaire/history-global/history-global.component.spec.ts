import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryGlobalComponent } from './history-global.component';

describe('HistoryGlobalComponent', () => {
  let component: HistoryGlobalComponent;
  let fixture: ComponentFixture<HistoryGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryGlobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
