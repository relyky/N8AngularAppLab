import { Component, ViewChild, ElementRef } from '@angular/core';
import { Demo003CounterComponent } from './demo003-counter/demo003-counter.component';

@Component({
  selector: 'app-demo003',
  templateUrl: './demo003.component.html',
  styleUrl: './demo003.component.css'
})
export class Demo003Component {
  @ViewChild('refCounter') refCounter!: Demo003CounterComponent; // ElementRef

  message: string = '';
  interval: number = 3;

  handleCountChange(count: number) {
    this.message = `Count changed to: ${count}`;
  }

  resetCount() {
    this.refCounter.reset();
  }
}
