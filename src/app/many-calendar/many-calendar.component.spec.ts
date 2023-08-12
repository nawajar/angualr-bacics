import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyCalendarComponent } from './many-calendar.component';

describe('ManyCalendarComponent', () => {
  let component: ManyCalendarComponent;
  let fixture: ComponentFixture<ManyCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManyCalendarComponent]
    });
    fixture = TestBed.createComponent(ManyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
