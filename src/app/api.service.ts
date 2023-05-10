import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// const API_URL = 'https://reqres.in';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // public get(url): Observable<any> {
  //   return this.http.get(API_URL + '/api/' + url).pipe(map((res) => res));
  // }

  public login(): Observable<any> {
    return this.http
      .post('http://102.50.254.72:8010/jwt-api-token-auth/', {
        username: 'amhaoud',
        password: 'amhaoud123',
      })
      .pipe(map((res) => res));
  }
}
// /api/users
