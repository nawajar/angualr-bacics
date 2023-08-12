import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-nested-comp',
  templateUrl: './nested-comp.component.html',
  styleUrls: ['./nested-comp.component.scss'],
})
export class NestedCompComponent implements AfterViewInit {
  cars: { name: string; model: string }[] = [];

  constructor() {
    setTimeout(() => {
      this.cars.push({
        name: 'car b',
        model: 'car b model',
      });
    }, 3000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.cars.push({
        name: 'car c',
        model: 'car c model',
      });
    }, 3000);
  }

  addCar(): void {
    this.cars.push({
      name: 'car d',
      model: 'car d model',
    });
    // this.cars = [
    //   {
    //     name: 'car c',
    //     model: 'car c model',
    //   },
    // ];
  }
}
