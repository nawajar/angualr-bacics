import { Component, Input, OnInit, TemplateRef } from '@angular/core';

interface Calendar {
  daysLabel: string[];
  days: {
    day: number;
  }[];
  month?: number;
  year?: number;
  nextMonth?: () => void;
  prevMonth?: () => void;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input()
  contentsTemplate: TemplateRef<unknown>;

  calendarInstance: Calendar;
  today = new Date();
  currentDay = this.today.getDate();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();

  startDayInWeek = new Date(this.currentYear, this.currentMonth, 1).getDay();

  ngOnInit(): void {
    this.initCalendarInstance();
    this.initCalendar();
  }

  initCalendarInstance(): void {
    this.calendarInstance = {
      days: [],
      daysLabel: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
      month: this.currentMonth,
      year: this.currentYear,
      nextMonth: () => this.nextMonth(),
      prevMonth: () => this.prevMonth(),
    };
  }

  initCalendar(): void {
    const daysInMonth = this.daysInMonth(this.currentMonth, this.currentYear);
    const prevMonth = Array.from({ length: this.startDayInWeek }, () => {
      return { day: null };
    });
    const thisMonth = Array.from({ length: daysInMonth }, (_, i) => {
      return { day: i + 1 };
    });
    this.calendarInstance.days.push(...prevMonth, ...thisMonth);
  }

  clearDay(): void {
    this.calendarInstance.days = [];
  }

  nextMonth(): void {
    this.currentMonth += 1;
    this.calendarInstance.month = this.currentMonth;
    this.clearDay();
    this.startDayInWeek = new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();
    this.initCalendar();
  }

  prevMonth(): void {
    this.currentMonth -= 1;
    this.calendarInstance.month = this.currentMonth;
    this.clearDay();
    this.startDayInWeek = new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();
    this.initCalendar();
  }

  daysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }
}
