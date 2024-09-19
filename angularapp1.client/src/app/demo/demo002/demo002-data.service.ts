import { Injectable } from '@angular/core';
import { WeatherForecast } from './demo002-dto';
import { HttpClient } from '@angular/common/http';
import { ApiClientService } from '../../shared/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class Demo002DataService {
  public dataList?: WeatherForecast[] = [];
  public f_loading: boolean = false;
  public errMsg?: string = undefined;

  constructor(private apiClient: ApiClientService, private http: HttpClient) { }

  qryDataList() {
    this.errMsg = undefined;
    this.f_loading = true;
    this.apiClient.getData<WeatherForecast[]>('/api/WeatherForecast/QryDataList')
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

  //qryDataList() {
  //  this.errMsg = undefined;
  //  this.f_loading = true;
  //  this.http.get<WeatherForecast[]>('/api/WeatherForecast/QryDataList')
  //    .subscribe({
  //      next: (value) => {
  //        console.info('qryDataList NEXT', value);
  //        this.dataList = value;
  //        this.f_loading = false;
  //      },
  //      error: (err) => {
  //        console.error('qryDataList ERROR', err);
  //        this.errMsg = err.message;
  //        this.f_loading = false;
  //      }
  //    });
  //}

  //qryDataList(): Observable<WeatherForecast[]> {
  //  return this.http.get<WeatherForecast[]>('/api/WeatherForecast/QryDataList');
  //}
}
