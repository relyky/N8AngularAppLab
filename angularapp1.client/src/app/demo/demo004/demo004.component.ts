import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Demo004DataService } from './demo004-data.service';
import { Todo } from './demo004-dto';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { NgIf, NgFor, NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
    selector: 'app-demo004',
    templateUrl: './demo004.component.html',
    styleUrl: './demo004.component.css',
    standalone: true,
    imports: [FormsModule, NgIf, NgFor, NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault]
})
export class Demo004Component {
  constructor(private authSvc: AuthService, private router: Router, public dataSvc: Demo004DataService) { }

  ngOnInit() {
    // 發現未登入則導向登入頁
    if (!this.authSvc.isAuthed) {
      alert('未登入！將自動導向登入頁...');
      this.router.navigate(['/login'])
      return;
    }

    // 畫面一開始就取得資料
    this.dataSvc.qryDataList();
  }

  /// ref:[Listening for form submission](https://v17.angular.io/api/forms/NgForm#listening-for-form-submission)
  handleSubmit(refForm: NgForm) {
    if (!refForm.valid) return;
    this.dataSvc.addData(refForm);
  }

  handleRemove(item: Todo) {
    this.dataSvc.delData(item);
  }

  handleToggleDone(item: Todo) {
    const updItem = { ...item, done: !item.done };
    this.dataSvc.updData(updItem);
  }
}
