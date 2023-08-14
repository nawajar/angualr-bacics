import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.form = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: '',
    //   address: this.fb.group({
    //     street: ['', Validators.required],
    //     city: [''],
    //     state: [''],
    //     zip: [''],
    //   }),
    // });
  }

  formInvalid(): any {
    return this.form.invalid;
  }

  submit(): void {
    if (this.formInvalid()) {
      return;
    }
    alert();
  }
}
