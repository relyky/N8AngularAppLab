import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo005',
  standalone: true,
  imports: [],
  templateUrl: './demo005.component.html',
  styleUrl: './demo005.component.css'
})
export class Demo005Component {
  public counter: number = 0;

  //觀察生命週期
  constructor() {
    console.log('Demo005Component constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Demo005Component ngOnChanges', changes);
    //this.firstChange = changes['price'].firstChange;
    //this.lastPrice = changes['price'].previousValue;
  }

  ngOnInit() {
    console.log('Demo005Component ngOnInit');
    this.counter = 987;
  }

  ngDoCheck() {
    console.log('Demo005Component ngDoCheck');
  }

  ngOnDestroy() {
    console.log('Demo005Component ngOnDestroy');
  }

  ngAfterContentInit() {
    console.log('Demo005Component ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Demo005Component ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Demo005Component ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Demo005Component ngAfterViewChecked');
  }

  doCount() {
    this.counter++;
  }
}
