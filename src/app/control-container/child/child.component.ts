import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {

  get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  constructor(public controlContainer: ControlContainer) {}


}
