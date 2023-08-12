import { Component } from '@angular/core';

@Component({
  selector: 'app-many-calendar',
  templateUrl: './many-calendar.component.html',
  styleUrls: ['./many-calendar.component.scss'],
})
export class ManyCalendarComponent {
  month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  transformMonth(monthIdx: number): string {
    return this.month[monthIdx];
  }
}
