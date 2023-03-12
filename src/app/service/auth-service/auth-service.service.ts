import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginRequest } from '../../shared/models/login-request.model';
import { LoginResponse } from '../../shared/models/login-response.model';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  private apiUrl = 'https://www.melivecode.com/api';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body: LoginRequest = {
      username: email,
      password: password,
      expiresIn: null
    }
    return this.http.post(`${this.apiUrl}/login`, body).pipe(
      map(response => {
        const loginResponse = response as LoginResponse

        localStorage.setItem('authToken',loginResponse.accessToken);
        localStorage.setItem('currentUser',JSON.stringify(loginResponse.user));
        return loginResponse;
      })
    )
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean{
    const authToken = localStorage.getItem('authToken');
    const currentUser = localStorage.getItem('currentUser');
    return !!authToken && !!currentUser;
  }
}
