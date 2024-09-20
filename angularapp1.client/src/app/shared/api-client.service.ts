/// description: Service for making API calls with Security Information.

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient, private authSvc: AuthService) { }

  /// Query or Get
  getData<T>(url: string): Observable<T> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (this.authSvc.isAuthed && this.authSvc.authToken) {
      headers = headers.set('Authorization', `Bearer ${this.authSvc.authToken}`);
    }

    return this.http.get<T>(url, { headers });
  }

  /// Add or Post
  postData<T>(url: string, args: object): Observable<T> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (this.authSvc.isAuthed && this.authSvc.authToken) {
      headers = headers.set('Authorization', `Bearer ${this.authSvc.authToken}`);
    }

    return this.http.post<T>(url, args, { headers });
  }

  /// Update or Put
  putData<T>(url: string, args: T): Observable<T> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (this.authSvc.isAuthed && this.authSvc.authToken) {
      headers = headers.set('Authorization', `Bearer ${this.authSvc.authToken}`);
    }

    return this.http.put<T>(url, args, { headers });
  }

  /// Delete
  delData(url: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (this.authSvc.isAuthed && this.authSvc.authToken) {
      headers = headers.set('Authorization', `Bearer ${this.authSvc.authToken}`);
    }

    return this.http.delete(url, { headers });
  }
}
