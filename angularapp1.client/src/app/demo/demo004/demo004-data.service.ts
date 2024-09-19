import { Injectable } from '@angular/core';
import { Todo } from './demo004-dto';
import { ApiClientService } from '../../shared/api-client.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class Demo004DataService {
  public dataList: Todo[] = [];
  public f_loading: boolean = false;
  public errMsg?: string = undefined;

  constructor(private http: HttpClient, private apiClient: ApiClientService) { }

  qryDataList() {
    this.errMsg = undefined;
    this.f_loading = true;

    this.apiClient.getData<Todo[]>('/api/Todo')
      .subscribe({
        next: (value) => {
          console.info('qryDataList NEXT', value);
          this.dataList = value;
          this.f_loading = false;
        },
        error: (err) => {
          console.error('qryDataList ERROR', err);
          this.errMsg = err.message;
          this.f_loading = false;
        }
      });
  }

  addData(refForm: NgForm) {
    const description = refForm.value['description'];
    const args = { description };

    this.errMsg = undefined;
    this.f_loading = true;
    this.apiClient.postData<Todo>('/api/Todo', args)
      .subscribe({
        next: (newData) => {
          console.info('addData NEXT', newData);
          this.dataList = [newData, ...this.dataList];
          this.f_loading = false;
        },
        error: (err) => {
          console.error('addData ERROR', err);
          this.errMsg = err.message;
          this.f_loading = false;
        }
      });
  }

  delData(item: Todo) {
    this.errMsg = undefined;
    this.f_loading = true;
    this.http.delete(`/api/Todo/${item.sn}`)
      .subscribe({
        next: () => {
          console.info('delData NEXT');
          this.dataList = this.dataList.filter((c) => c.sn !== item.sn);
          this.f_loading = false;
        },
        error: (err) => {
          console.error('delData ERROR', err);
          this.errMsg = err.message;
          this.f_loading = false;
        }
      });
  }

  updData(item: Todo) {
    this.errMsg = undefined;
    this.f_loading = true;
    this.apiClient.putData('/api/Todo', item)
      .subscribe({
        next: () => {
          console.info('updData NEXT');
          this.dataList = this.dataList.map((c) => c.sn === item.sn ? item : c);
          this.f_loading = false;
        },
        error: (err) => {
          console.error('updData ERROR', err);
          this.errMsg = err.message;
          this.f_loading = false;
        }
      });
  }
}
