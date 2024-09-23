import { Component, ViewChild, ElementRef } from '@angular/core';
import { Demo003CounterComponent } from './demo003-counter/demo003-counter.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-demo003',
    templateUrl: './demo003.component.html',
    styleUrl: './demo003.component.css',
    standalone: true,
    imports: [FormsModule, Demo003CounterComponent]
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
