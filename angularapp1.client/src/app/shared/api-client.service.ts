/// description: Service for making API calls with Security Information.

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }

  /// Query or Get
  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  /// Add or Post
  postData<T>(url: string, args: object): Observable<T> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<T>(url, args, { headers });
  }

  /// Update or Put
  putData<T>(url: string, args: T): Observable<T> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put<T>(url, args, { headers });
  }

  /// Delete
  delData(url: string) {
    return this.http.delete(url);
  }
}
