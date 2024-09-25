import { Component } from '@angular/core';

@Component({
  selector: 'app-demo005',
  templateUrl: './demo005.component.html',
  styleUrl: './demo005.component.css'
})
export class Demo005Component {
  clickInfo?: object = undefined;
  f_hidden: boolean = false;
  fooValue: string = '我出運了';
  barValue: string = '今天天氣真好';
  bazValue: string = '就是這麼簡單';

  handleClick(e: MouseEvent) {
    this.clickInfo = {
      clickTime: new Date(),
      alt: e.altKey,
      ctrl: e.ctrlKey,
      shift: e.shiftKey
    };

    // Toggle visibility
    this.f_hidden = !this.f_hidden;
  }

  handleBarChange(value: string) {
    this.barValue = value;
  }
}
