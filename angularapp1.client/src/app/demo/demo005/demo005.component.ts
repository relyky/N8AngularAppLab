import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo005',
  templateUrl: './demo005.component.html',
  styleUrl: './demo005.component.css'
})
export class Demo005Component {
  @ViewChild('refMyElement') refMyElement!: ElementRef<HTMLDivElement>;
  @ViewChild('refMyInput') refMyInput!: ElementRef<HTMLInputElement>;

  // events up
  clickInfo?: object = undefined;
  f_hidden: boolean = false;
  // 輸入
  fooValue: string = '我出運了';
  barValue: string = '今天天氣真好';
  bazValue: string = '這是初始值';
  //// 表單輸入
  //myFormData?: object = undefined;

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

  handleSomething() {
    this.refMyElement.nativeElement.innerHTML = 'Hello, Angular';
    this.refMyInput.nativeElement.value = "我才是對的";
  }

  //handleMyFormSubmit(myFrom: NgForm) {
  //  console.log('handleMyFormSubmit', { myFrom });
  //  this.myFormData = {
  //    fieldA: myFrom.value['fieldA'],
  //    fieldB: myFrom.value['fieldB'],
  //  };
  //}
}
