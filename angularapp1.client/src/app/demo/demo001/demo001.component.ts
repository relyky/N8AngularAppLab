import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo001',
  templateUrl: './demo001.component.html',
  styleUrl: './demo001.component.css'
})
export class Demo001Component {
  public counter: number = 0;

  //觀察生命週期
  constructor() {
    console.log('Demo001Component constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Demo001Component ngOnChanges', changes);
    //this.firstChange = changes['price'].firstChange;
    //this.lastPrice = changes['price'].previousValue;
  }

  ngOnInit() {
    console.log('Demo001Component ngOnChanges');
    this.counter = 987;
  }

  ngDoCheck() {
    console.log('Demo001Component ngDoCheck');
  }

  ngOnDestroy() {
    console.log('Demo001Component ngOnDestroy');
  }

  ngAfterContentInit() {
    console.log('Demo001Component ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Demo001Component ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Demo001Component ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Demo001Component ngAfterViewChecked');
  }

  doCount() {
    this.counter++;
  }
}
