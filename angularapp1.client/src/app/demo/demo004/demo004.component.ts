import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Demo004DataService } from './demo004-data.service';
import { Todo } from './demo004-dto';

@Component({
  selector: 'app-demo004',
  templateUrl: './demo004.component.html',
  styleUrl: './demo004.component.css'
})
export class Demo004Component {
  constructor(public dataSvc: Demo004DataService) { }

  ngOnInit() {
    console.log('Demo004Component ngOninit');
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
