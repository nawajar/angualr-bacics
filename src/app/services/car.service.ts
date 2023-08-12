import { Injectable } from '@angular/core';
import { CarModel } from '../model/car-model';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CarService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  getCar() {
    return of<CarModel[]>([
      {
        name: 'CAR A',
        model: 'A',
        sn: 'A10',
      },
      {
        name: 'CAR B',
        model: 'B',
      },
      {
        name: 'CAR B',
        model: 'B',
        sn: undefined
      },
    ]);
  }
}
