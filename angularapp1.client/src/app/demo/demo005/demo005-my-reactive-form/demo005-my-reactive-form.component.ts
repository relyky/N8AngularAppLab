import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo005-my-reactive-form',
  templateUrl: './demo005-my-reactive-form.component.html',
  styleUrl: './demo005-my-reactive-form.component.css'
})
export class Demo005MyReactiveFormComponent {
  myForm!: FormGroup; // 控制整個表單
  myField: FormControl = new FormControl('郝聰明', Validators.required); // 控制單欄位

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('郝聰明', Validators.required),
      email: new FormControl('smart@mail.server', [Validators.required, Validators.email]),
      salary: new FormControl(16888, [Validators.required, Validators.min(1000)]),
    });
  }

  handleSubmit() {
    if (this.myForm.valid) {
      console.info('handleSubmit', { formData: this.myForm.value, form: this.myForm });
    }
  }

  handleReset() {
    this.myForm.reset({
      name: '預設名稱',
      email: 'reset@mail.server',
      salary: 900
    });
  }

  handleWatch() {
    console.info('handleWatch', { formData: this.myForm.value, form: this.myForm });
  }


}
