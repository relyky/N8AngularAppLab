import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo003-counter',
  templateUrl: './demo003-counter.component.html',
  styleUrl: './demo003-counter.component.css'
})
export class Demo003CounterComponent {
  @Input() initialCount: number = 10;
  @Input() interval: number = 1;
  @Output() onCountChange = new EventEmitter<number>(); 

  count: number = 7;

  ngOnChanges(changes: SimpleChanges) {
    console.log('Demo001Component ngOnChanges', changes);
  }

  increment() {
    this.count += this.interval;
    this.onCountChange.emit(this.count);
  }

  reset() {
    this.count = this.initialCount;
    this.onCountChange.emit(this.count);
  }
}
