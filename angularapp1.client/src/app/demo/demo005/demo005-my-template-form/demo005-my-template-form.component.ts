import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo005-my-template-form',
  templateUrl: './demo005-my-template-form.component.html',
  styleUrl: './demo005-my-template-form.component.css'
})
export class Demo005MyTemplateFormComponent {
  // 表單輸入
  myFormData?: object = undefined;

  handleMyFormSubmit(myFrom: NgForm) {
    console.log('handleMyFormSubmit', { myFrom });
    this.myFormData = {
      fieldA: myFrom.value['fieldA'],
      fieldB: myFrom.value['fieldB'],
    };
  }
}
