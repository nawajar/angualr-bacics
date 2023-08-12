import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dom-operation',
  templateUrl: './dom-operation.component.html',
  styleUrls: ['./dom-operation.component.scss'],
})
export class DomOperationComponent implements OnInit, AfterViewInit {
  @ViewChild('btnContainer')
  btn: ElementRef | null = null;

  counter = 0;

  ngOnInit(): void {
    //cant get btn on init life cycle use after view init instead.
    const element = this.btn?.nativeElement;
    console.log('onInit : ' + element);
  }

  ngAfterViewInit(): void {
    const element = this.btn?.nativeElement;
    element.querySelector('button').addEventListener('click', () => {
      this.counter += 1;
    });
    console.log('afterViewInit ' + element);
  }
}
