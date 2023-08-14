import { ElementRef } from '@angular/core';
import { DomOperationComponent } from './dom-operation.component';
import { describe, expect, it, jest } from '@jest/globals';

describe('Name of the group', () => {
  let component: DomOperationComponent;

  beforeEach(() => {
    component = new DomOperationComponent();
  });

  it('call call query selector', () => {
    component.btn = new ElementRef('');
    component.btn.nativeElement = {
      querySelector: jest.fn(),
    };

    component.ngAfterViewInit();

    expect(component.btn);
  });
});
