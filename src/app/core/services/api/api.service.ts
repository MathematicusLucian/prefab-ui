import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient) {}

  // getConfig(apiPath: any) {
  //   const data = this.http.get(apiPath);
  //   return data;
  // }

  callAPI(apiPath: any): Observable<HttpResponse<any>> {
    const data = this.http.get<any>(
      apiPath, { observe: 'response' });
    return data;
  }
}
