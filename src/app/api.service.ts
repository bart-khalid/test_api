import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public login(): Observable<any> {
    return this.http
      .post('http:api_endpoint...', {
        username: 'admin',
        password: 'admin',
      })
      .pipe(map((res) => res));
  }
}
// /api/users
