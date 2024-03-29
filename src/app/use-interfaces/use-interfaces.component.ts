import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/model/car-model';
import { CarService } from 'src/app/services/car.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-use-interfaces',
  templateUrl: './use-interfaces.component.html',
  styleUrls: ['./use-interfaces.component.scss'],
})
export class UseInterfacesComponent implements OnInit {
  cars: CarModel[] | undefined;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    this.carService
      .getCar()
      .pipe(takeUntilDestroyed())
      .subscribe((res) => {
        this.cars = res;
      });
  }
}
