import { Component } from '@angular/core';
import { Demo002DataService } from './demo002-data.service';

@Component({
  selector: 'app-demo002',
  templateUrl: './demo002.component.html',
  styleUrl: './demo002.component.css'
})
export class Demo002Component {

  constructor(public dataSvc: Demo002DataService) { }

  ngOnInit() {
    this.dataSvc.qryDataList();
  }
}
