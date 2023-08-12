import { FormBuilder } from '@angular/forms';
import { ParentComponent } from './parent.component';
import { describe, expect, it, jest } from '@jest/globals';

describe('Parent', () => {
  let fb: FormBuilder;
  let component: ParentComponent;

  beforeEach(() => {
    fb = new FormBuilder();
    component = new ParentComponent(fb);
  });

  it('should init form group', () => {
    expect(component.form.getRawValue()).toEqual({
      firstName: '',
      lastName: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: '',
      },
    });
  });

  describe('SubmitForm', () => {
    it('ma mark form as touch', () => {
      component.form.markAllAsTouched = jest.fn();
      component.submitForm();
      expect(component.form.markAllAsTouched).toBeCalled();
    });

    it('should not alert when form invalid', () => {
      window.alert = jest.fn();
      component.submitForm();

      expect(window.alert).not.toHaveBeenCalled();
    });

    it('should not alert when form valid', () => {
      window.alert = jest.fn();
      //this line make form valid.
      component.form.patchValue({
        firstName: 'firstName',
        address: {
          street: 'street',
        },
      });

      component.submitForm();

      expect(window.alert).toHaveBeenCalledWith('form submit.');
    });
  });
});
