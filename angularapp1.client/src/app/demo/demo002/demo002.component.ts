import { Component } from '@angular/core';
import { Demo002DataService } from './demo002-data.service';
import { NgIf, NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-demo002',
    templateUrl: './demo002.component.html',
    styleUrl: './demo002.component.css',
    standalone: true,
    imports: [NgIf, NgClass, NgFor]
})
export class Demo002Component {

  constructor(public dataSvc: Demo002DataService) { }

  ngOnInit() {
    this.dataSvc.qryDataList();
  }
}
