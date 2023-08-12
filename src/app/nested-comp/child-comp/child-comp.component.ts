import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildCompComponent {
  _car: { name: string; model: string };


  @Input()
  public get cars(): { name: string; model: string } {
    return this._car;
  }

  public set cars(value: { name: string; model: string }) {
    this._car = value;
    this.ref.markForCheck();
  }

  constructor(private ref: ChangeDetectorRef) {}

}
