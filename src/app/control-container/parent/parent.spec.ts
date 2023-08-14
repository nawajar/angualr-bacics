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

  it('should show alert when submit data success', () => {
    window.alert = jest.fn();
    component.formInvalid = jest.fn().mockReturnValue(false);

    component.submit();
    
    expect(window.alert).toHaveBeenCalled();
  });

  it('should NOT show alert when submit data fail', () => {
    window.alert = jest.fn();
    component.formInvalid = jest.fn().mockReturnValue(true);

    component.submit();

    expect(window.alert).not.toHaveBeenCalled();
  });
});
